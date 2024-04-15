import MenuProd from '../../components/menuprod';

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>
         <MenuProd />
         <div>{children}</div>
        </>        
    );
  }