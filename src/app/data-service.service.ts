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
    return this.http.patch(this.myPosts,posts)
  }
  setCounter (uniqArr,data,key){
   
    let counterObj={}
    for(let tag of uniqArr){
      counterObj[tag]=0;

      data.forEach(post=>{
        let flag=false;
       if(!Array.isArray(post[key])){
        post[key]=Array.of(post[key]);
        flag=true;
       }
      
        post[key].forEach(possibleMatch=>{
          if(possibleMatch===tag){
              counterObj[tag]++  
          }
        })
        if(flag){
          post[key]=post[key][0]
        }
      })
    }
    return counterObj

  }

  filterData(unfilteredData, tag){
    var filteredData=unfilteredData;
     if(tag['category']){
    filteredData=unfilteredData.filter(post => post['tags'].indexOf(tag['category'])!=-1)
  }
   else if(tag['author']){
    filteredData= unfilteredData.filter(post=> post['author']===tag['author'])

  }
     return filteredData
  }
 

  constructor(private http: HttpClient) {
    
  }
}
