import React, { useState } from 'react';
import { Carousel, Card } from 'antd';
import { comments } from '../../../constants';
import { google } from '../../../assets/images';
import { google2 } from '../../../assets/images';

const CommentCarousel = () => {
  const [expandedCommentIndex, setExpandedCommentIndex] = useState(null);
  const isMobile = window.innerWidth <= 700;
  const handleReadMore = (index) => {
    setExpandedCommentIndex(index === expandedCommentIndex ? null : index);
  };

  return (
    <div>
      <div className="flex justify-center items-center ">
        <div className="mt-10">
          <div className="text-4xl font-bold max-lg:text-center max-lg:mx-auto max-lg:w-[80vw] max-lg:text-3xl max-lg:mb-4">What Are Our Clients Saying?
            <div className="text-lg mt-10 flex justify-center items-center sm:mb-6">
              <div className='mr-2'>Excellent Review On </div>
              <img src={google2} alt="" className='h-[20px]' />
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center '>
        <Carousel
          autoplay
          dots={false}
          infinite={true}
          arrows={true}
          slidesToShow={isMobile ? 1 : 3}
          slidesToScroll={1}
          autoplaySpeed={2000}
          className='w-[80vw]'
        >
          {comments.map((comment, index) => {
            const isExpanded = expandedCommentIndex === index;
            const textToShow = isExpanded ? comment.comment : `${comment.comment.slice(0, 100)}...`;

            return (
              <div key={index} className="relative group">
                <Card
                  className={`overflow-hidden text-white bg-themeColor ${isExpanded ? 'animate-commentExpand' : 'animate-commentCollapse '}`}
                  onClick={() => handleReadMore(index)}
                >
                  <div className='flex justify-start items-center'>
                    <img
                      src={comment.avatar}
                      alt=""
                      className='w-[45px] h-[45px] rounded-full mb-3 '
                    />
                    <div className='ml-5 mb-3'>
                      <p className='text-center text-base'>
                        <strong>{comment.name}</strong>
                      </p>
                      <div className='text-gray-400 text-sm'>
                        {comment.date}
                      </div>
                    </div>
                  </div>
                  <div className='text-left mx-3 '>
                    <p>{textToShow}</p>
                  </div>
                  <div>
                    <img src={google} alt="" className='h-[30px] w-[30px] absolute top-7 right-5' />
                  </div>
                  <div
                    className="absolute bottom-2 right-6 text-underline transform  text-center opacity-0 group-hover:opacity-100"
                  >
                    <button
                      className='font-4 mt-2'
                    >
                      {isExpanded ? '^' : 'Read more'}
                    </button>
                  </div>
                </Card>

              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default CommentCarousel;


// { 
//   import AC from './AC.svg'
// import avatar1 from './avatar1.png'
// import avatar2 from './avatar2.svg'
// import avatar3 from './avatar3.png'
// import avatar4 from './avatar4.png'
// import avatar5 from './avatar5.svg'
// import avatar6 from './avatar6.png'
// import avatar7 from './avatar7.png'
// import avatar8 from './avatar8.svg'
// import avatar9 from './avatar9.png'
// import avatar10 from './avatar10.svg'
// import bathroom from './bathroom.svg'
// import bin from './bin.svg'
// import blinds from './blinds.svg'
// import carpet from './carpet.svg'
// import closet from './closet.svg'
// import dishes from './dishes.svg'


// import disinfecting from './disinfecting.svg'
// import google2 from './google2.svg'
// import microwave from './microwave.svg'
// import oven from './oven.svg'
// import refrigerator from './refrigerator.svg'
// import stairs from './stairs.svg'
// import tick from './tick.svg'
// import vacuum from './vacuum.svg'
// import wall from './wall.svg'
// import window from './window.svg'
// import checklist from './checklist.jpg'
// import cleaner from './cleaner.png'
// import headerLogo from './headerLogo.png'
// import homebackground from './homebackground.jpg'
// import livingRoom from './living-room.jpg'
// import onceOff from './onceOff.jpg'
// import regular from './regular.jpg'
// import springCleaning from './springCleaning.jpg'
// import google from '../icons/google.svg'
// import hamburger from '../icons/hamburger.svg'




// export {
//   AC, avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9, avatar10,
//   bathroom, bin, blinds, carpet, closet, dishes, disinfecting, google, google2, microwave, oven
//   , refrigerator, stairs, tick, vacuum, wall, window, checklist, cleaner, headerLogo
//   , homebackground, livingRoom, onceOff, regular, springCleaning, hamburger
// }


// }