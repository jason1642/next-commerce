import * as React from 'react';
import largeSectionStyle from './largeSection.module.css'
import Image from 'next/image'
import IpadCoverImage from '../../public/images/ipad-home-image.jpeg'


interface ILargeSectionProps {
}

const LargeSection: React.FunctionComponent<ILargeSectionProps> = (props) => {
  return (
    <div className={largeSectionStyle.container}> 
      
      <div className={largeSectionStyle.imageContainer} >
        <img
          // objectFit='contain'
          // layout='fill'
          className={largeSectionStyle.coverImage}
          src={'https://images.unsplash.com/photo-1608386390658-86cf60bcf61a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'}
        />
      </div>

      <div className={largeSectionStyle.infoWrapper}>
       New iPad 10th Generation
      </div>
    </div>
  );
};

export default LargeSection;
