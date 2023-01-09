<!-- 商品发布 -->
<script lang='ts' setup>
import { reactive, toRefs, ref } from 'vue'
import type { FormInstance, FormRules, UploadProps, UploadUserFile } from 'element-plus'
import { useMenusStore } from '@/store/index'

const menusStore = useMenusStore()

interface IpicList {
    name: string;
    url: string
}
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
    name: 'Hello',
    region: '',
    desc: '',
    presentPrice: '',
    originPrice: '',
    contactInfo: '',
    picList: [] as IpicList[],
    picTitle: '',
})
const rules = reactive<FormRules>({
    name: [
        { required: true, message: 'Please input Activity name', trigger: 'blur' },
        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
    region: [
        {
            required: true,
            message: 'Please select Activity zone',
            trigger: 'change',
        },
    ],
    desc: [
        { required: true, message: 'Please input activity form', trigger: 'blur' },
    ],
    presentPrice: [
        { required: true, message: 'Please input activity form', trigger: 'blur' },
    ],
    originPrice: [
        { required: true, message: 'Please input activity form', trigger: 'blur' },
    ],

})
const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            console.log('submit!')
        } else {
            console.log('error submit!', fields)
        }
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}


const dialogImageUrl = ref('')
const dialogVisible = ref(false)

const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
    console.log(uploadFile, uploadFiles)
}

const handlePictureCardPreview: UploadProps['onPreview'] = (uploadFile) => {
    dialogImageUrl.value = uploadFile.url!
    dialogVisible.value = true
}
</script>

<template>
    <div class="container">
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="70px" class="demo-ruleForm"
            size="default" status-icon>
            <el-form-item label="标题" prop="name">
                <el-input v-model="ruleForm.name" />
            </el-form-item>
            <el-form-item label="详情" prop="desc">
                <el-input v-model="ruleForm.desc" type="textarea" />
            </el-form-item>
            <el-form-item label="价格" prop="presentPrice">
                <el-input v-model="ruleForm.presentPrice" />
            </el-form-item>
            <el-form-item label="原价" prop="originPrice">
                <el-input v-model="ruleForm.originPrice" />
            </el-form-item>
            <el-form-item label="联系方式" prop="contactInfo">
                <el-input v-model="ruleForm.contactInfo" />
            </el-form-item>
            <el-form-item label="分类" prop="region">
                <el-select v-model="ruleForm.region" placeholder="其它">
                    <el-option :label="item.title" :value="item.kind" v-for="item in menusStore.menus"
                        :key="item.kind" />
                </el-select>
            </el-form-item>

            <el-form-item label="封面图" prop="picTitle">
                <el-upload v-model:file-list="ruleForm.picTitle" :multiple="false" :limit="1"
                    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" list-type="picture-card"
                    :on-preview="handlePictureCardPreview" :on-remove="handleRemove" class="container_pic">
                    <el-icon>
                        <Plus />
                    </el-icon>
                </el-upload>

                <el-dialog v-model="dialogVisible">
                    <img w-full :src="dialogImageUrl" alt="Preview Image" />
                </el-dialog>
            </el-form-item>

            <el-form-item label="详情图" prop="picList">
                <el-upload v-model:file-list="ruleForm.picList" :multiple="true" :limit="4"
                    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" list-type="picture-card"
                    :on-preview="handlePictureCardPreview" :on-remove="handleRemove" class="container_pic">
                    <el-icon>
                        <Plus />
                    </el-icon>
                </el-upload>

                <el-dialog v-model="dialogVisible">
                    <img w-full :src="dialogImageUrl" alt="Preview Image" />
                </el-dialog>
            </el-form-item>

            <el-form-item>
                <el-button @click="resetForm(ruleFormRef)">重置</el-button>
                <el-button type="primary" @click="submitForm(ruleFormRef)">
                    发布
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<style lang='scss' scoped>
.container {
    width: 90%;
    padding-top: 20px;

    &_pic {
        margin-left: 20px;
        padding-bottom: 20px;

        :deep(.el-upload--picture-card),
        :deep(.el-upload-list__item) {
            width: 70px;
            height: 70px;
            line-height: 110px;
        }
    }
}
</style>