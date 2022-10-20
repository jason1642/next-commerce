import * as React from 'react';
import headerStyles from './header.module.css'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Link from 'next/link'


interface IHeaderProps {
}

const categories = ['Store', 'iPhone', 'iPad', 'Mac', 'Airpods']

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <div className={headerStyles.container}>
      <div className={headerStyles.title}>Next Commerce</div>

      <div className={headerStyles['nav-group']} >



  
      {
          categories.map(ele => (
          <Link href={`/${ele.toLowerCase()}`} >
            <div className={headerStyles['nav-items']}>{ele}</div>
          </Link>
        ))
        }
        


    </div>
      <div className={headerStyles.iconContainer} >
  <ShoppingBagOutlinedIcon style={{
          color: 'white',
          padding: '0',
          height: '100%',
          // border: '1px solid white',
          fontSize: '1.7em',
        }}
        />

      </div>
      
    

    </div>
  );
};

export default Header;
