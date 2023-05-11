import './globals.css'

export const metadata = {
  title: '新聚轩家具 | Xinjuxuan Furniture',
  description: '新聚轩家具座落于全国最大的家具生产基地广东-佛山-龙江，本厂是集设计、开发、生产和销售于一体的家具制造企业，企业的产品从设计、用料到生产的整套工艺始终追求艺术与时尚、自然与环保、见解与舒适的完美结合，自进入市场以来因其深刻的内涵和精良的品质而深受消费者的青睐，经过多年的发展，产品已畅销全国各地及部分海外市场，完美秉承：“质量第一、顾客至上、服务至上”的宗旨。',}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
