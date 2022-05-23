<!--
 * @Description: 😎在这里写你的描述
 * @Autor: 曹老板
 * @Date: 2022-04-26 17:23:32
 * @LastEditTime: 2022-04-26 17:59:24
-->
<template>
  <div>
      <myForm v-bind="searchForm" :form="form"></myForm>
  </div>
</template>

<script>
import myForm from '@/components/Form/index'
export default {
    data(){
        return{
            searchForm:{
                formItem:[
                    {
                        type:'ElInput',
                        label:'姓名',
                        value:'name'
                    },
                    {
                        type:'ElSelect',
                        label:'年龄',
                        value:'age'
                    },
                    {
                        type:'ElSelect',
                        label:'电话',
                        value:'phone',
                        options:[
                            {
                                label:'电话3',
                                value:33333
                            },
                            {
                                label:'电话1',
                                value:111111
                            },
                            {
                                label:'电话2',
                                value:222222
                            }
                        ]
                    },
                ]
            },
            form:{
                name:'张三',
                age:20,
                phone:111111
            }
        }
    },
    components:{
        myForm
    }
}
</script>

<style>

</style>