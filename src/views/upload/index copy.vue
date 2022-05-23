<!--
 * @Description: 😎在这里写你的描述
 * @Autor: 曹老板
 * @Date: 2022-04-27 23:18:25
 * @LastEditTime: 2022-04-27 23:18:26
-->
<!--
 * @Description: 😎在这里写你的描述
 * @Autor: 曹老板
 * @Date: 2022-04-27 09:11:19
 * @LastEditTime: 2022-04-27 22:59:28
-->
<template>
    <div>
        <input type="file" @change="inputChange">
        <el-button @click="onClickBtn">点击按钮</el-button>
    </div>
</template>

<script>    
import {request} from './js/server'
const SIZE = 5 * 1024 * 1024; // 切片大小
export default {
    data(){
        return {
            fileList:{},
            fileData:[]
        }
    },
    methods:{
        inputChange(e){
         const [files]= e.target.files
         console.log("🤡 ~~ files", files)
         if(!files) return 
         this.fileList = files
        },
        // 文件切片
        createFileChunk(file,size = SIZE){
            const chunkFileList = []
            let cur = 0
            // 这里使用while循环代替递归使用
            while(cur<file.size){
                chunkFileList.push({file:file.slice(cur,cur+size)})
                cur+=size
            }
            return chunkFileList
        },
        // 发送请求
       async uploadRequest(){
            // 1. 创建多个formData
           const moreFormDataArr= this.fileData.map(({chunk,hash},index)=>{
                const formData = new FormData()
                formData.append("chunk",chunk)
                formData.append("name",hash)
                formData.append("filename",this.fileList.name)
                return {formData}
            })
           console.log("🤡 ~~ moreFormDataArr", moreFormDataArr)
            // 2. 创建一个有多个请求的实例数组
            const requestArr = moreFormDataArr.map(async ({formData})=>{
               request({
                  url:'http://localhost:3000',
                  data:formData
              })
            })
            console.log("🤡 ~~ requestArr", requestArr)
            await Promise.all(requestArr)
            await this.mergeRequest()

        },
    async mergeRequest() {
      await request({
        url: "http://localhost:3000/merge",
        headers: {
          "content-type": "application/json"
        },
        data: JSON.stringify({
          filename: this.fileList.name
        })
      });
    }, 

      async  onClickBtn(){
          const fileChunkList = this.createFileChunk(this.fileList)
          const {name} = this.fileList
          this.fileData = fileChunkList.map(({file},index)=>{
              return {
                  chunk:file,
                  hash:name+'_'+index
              }
          })
              console.log("🤡 ~~  this.fileData",  this.fileData)
         await this.uploadRequest()
        },
    }
}
</script>

<style>

</style>