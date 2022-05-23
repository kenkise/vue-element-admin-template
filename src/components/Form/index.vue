<!--
 * @Description: 😎在这里写你的描述
 * @Autor: 曹老板
 * @Date: 2022-04-26 17:34:45
 * @LastEditTime: 2022-04-26 17:52:12
-->
<template>
  <el-form ref="form" :model="form" label-width="80px">
          <el-row>
                <template v-for="(item,index) in formItem" >
                    <el-col :xs="1"  :lg="8" :key="index">
                <el-form-item :label="item.label" >
                    <component :is="item.type" v-model="form[item.value]">
                        <template v-if="item.type == 'ElSelect'">
                              <el-option v-for="(item,index) in item.options" :key="index" 
                              :label="item.label"
                            :value="item.value">
                            </el-option>
                        </template>
                      
                    </component>
                </el-form-item>
                    </el-col>
                </template>
        
          </el-row>
      </el-form>
</template>

<script>
export default {
    props:{
        formItem:{
            type:Array,
            required:true
        },
        form:{
            type:Object,
            required:true
        }
    }

}
</script>

<style>

</style>