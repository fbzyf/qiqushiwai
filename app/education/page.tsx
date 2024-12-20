import { EducationValue } from '@/components/EducationValue'

// 修改为异步组件
async function EducationPage() {
  return (
    <div className="pt-20">
      <EducationValue />
    </div>
  )
}

// 确保默认导出
export default EducationPage 