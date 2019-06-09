import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  myPosts = '../../assets/blogData/posts.json'
  myData=[]

  getConfig() {
    return this.http.get(this.myPosts);
  }
  putConfig(posts){
    console.log('putting posts', posts)
    return this.http.patch(this.myPosts,posts)
  }
  setCounter (uniqArr,data){
    let counterObj={}
    for(let tag of uniqArr){
      counterObj[tag]=0;
      data.forEach(post=>{
        post['tags'].forEach(possibleMatch=>{
          if(possibleMatch===tag){
              counterObj[tag]++  
          }
        })
      })
    }
    return counterObj

  }

  filterData(unfilteredData, tag){
    var filteredData=unfilteredData;
     if(tag['category']){
    filteredData=unfilteredData.filter(post => post['tags'].indexOf(tag['category'])!=-1)
    console.log('in cat if,' , filteredData)
  }
   else if(tag['author']){
    filteredData= unfilteredData.filter(post=> post['author']===tag['author'])

  }
     return filteredData
  }
 

  constructor(private http: HttpClient) {
    
  }
}
