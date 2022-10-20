import * as React from 'react';
import headerStyles from './header.module.css'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Link from 'next/link'


interface IHeaderProps {
}

const categories = ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'Airpods']

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <div className={headerStyles.container}>

      <Link href='/'>
        <div className={headerStyles.title}>Next Commerce</div> 
      </Link>

      <div className={headerStyles['nav-group']} >



  
      {
          categories.map(ele => (
          <Link href={`/${ele.toLowerCase()}`} >
            <div className={headerStyles['nav-items']}>{ele}</div>
          </Link>
        ))
        }
        


      </div>
      <Link href={'/shop/bag'}>


   
      <div className={headerStyles.iconContainer} >
  <ShoppingBagOutlinedIcon style={{
          color: 'black',
          fontWeight: '300',
          padding: '0',
          height: '100%',
          // border: '1px solid white',
          fontSize: '1.7em',
        }}
        />

      </div>
         </Link>
    

    </div>
  );
};

export default Header;
