import * as React from 'react';
import largeSectionStyle from './largeSection.module.css'
import Image from 'next/image'
import iPhone14Pro from '../../public/images/iphone14pro.png'


interface ILargeSectionProps {
}

const LargeSection: React.FunctionComponent<ILargeSectionProps> = (props) => { 
  return (
    <div className={largeSectionStyle.container}> 
      
      <div className={largeSectionStyle.imageContainer} >
        <Image
          className={largeSectionStyle.coverImage}
          src={iPhone14Pro}
        />
      </div>

      <div className={largeSectionStyle.infoWrapper}>
        <div className={largeSectionStyle.label} >
        iPhone 14 Pro
        </div>
        <div style={{ fontSize: '1.6em', fontWeight: '300'}} className={largeSectionStyle.label} >
        Pro. Beyond.
        </div>
      </div>
    </div>
  );
};

export default LargeSection;
