import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata_cn: Metadata = {
  title: '新聚轩家具 - 定制商务、办公、展厅、餐厅家具，艺术与环保的完美结合',
  description: '新聚轩家具位于广东佛山，全国最大的家具生产基地。我们专注于设计、开发、生产和销售高品质定制家具，涵盖商务、办公、展厅、餐厅等领域。产品追求艺术与时尚、自然与环保、见解与舒适的完美结合，畅销全国及海外市场，秉承“质量第一、顾客至上、服务至上”的宗旨，深受消费者信赖。',
  keywords: '新聚轩家具, 定制家具, 商务家具, 办公家具, 展厅家具, 餐厅家具, 佛山家具, 环保家具, 时尚家具, 家具设计, 家具生产, 家具销售, 高品质家具'
}
export const metadata: Metadata = {
  title: 'Xinjuxuan Furniture - Custom Business, Office, Exhibition, and Restaurant Furniture, Perfect Blend of Art and Eco-Friendliness',
  description: 'Xinjuxuan Furniture, located in Foshan, Guangdong, the largest furniture production base in China, specializes in the design, development, production, and sales of high-quality custom furniture for business, office, exhibition, and restaurant spaces. Our products combine art, fashion, nature, and environmental protection, and are popular nationwide and in overseas markets. We adhere to the principle of "Quality First, Customer Supreme, Service Excellence," earning the trust of consumers.',
  keywords: 'Xinjuxuan Furniture, Custom Furniture, Business Furniture, Office Furniture, Exhibition Furniture, Restaurant Furniture, Foshan Furniture, Eco-Friendly Furniture, Fashion Furniture, Furniture Design, Furniture Production, Furniture Sales, High-Quality Furniture'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" dir="ltr">
      <body className="antialiased bg-gray-900">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
