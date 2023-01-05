<!-- 商品发布 -->
<script lang='ts' setup>
import { reactive, toRefs, ref } from 'vue'
import type { FormInstance, FormRules, UploadProps, UploadUserFile } from 'element-plus'


const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
    name: 'Hello',
    region: '',
    desc: '',
    presentPrice: '',
    originPrice: '',
    picList: [],
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



const fileList = ref<UploadUserFile[]>([
    {
        name: 'food.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
    },
    {
        name: 'food.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
    },
])

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
            <el-form-item label="分类" prop="region">
                <el-select v-model="ruleForm.region" placeholder="其它">
                    <el-option label="其它" value="其它" />
                    <el-option label="学习用品" value="学习用品" />
                    <el-option label="生活用品" value="生活用品" />
                    <el-option label="衣服鞋帽" value="衣服鞋帽" />
                    <el-option label="运动健身" value="运动健身" />
                    <el-option label="电子产品" value="电子产品" />
                    <el-option label="零食饮料" value="零食饮料" />
                </el-select>
            </el-form-item>

            <el-form-item label="上传图片" prop="picList">
                <el-upload v-model:file-list="ruleForm.picList"
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