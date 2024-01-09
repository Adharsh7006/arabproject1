import React, { useEffect, useRef, useState } from 'react'
import './Array.css'
import Imageslider from './Imageslider'

function Array() {
  const [hide, sethide] = useState(false)
  const parallax=useRef()
  const image=[
    {image:"https://img.freepik.com/free-vector/frightening-halloween-realistic-background_33099-1052.jpg?size=626&ext=jpg&uid=R116853847&ga=GA1.1.564187870.1694934641&semt=ais"},
    {image:"https://img.freepik.com/free-photo/spooky-scene-with-old-house_23-2149758917.jpg?w=826&t=st=1704683627~exp=1704684227~hmac=200d77648425543c38370daac1739a4c10d35883ea439bea81789ed292657947"},
    {image:"https://img.freepik.com/free-vector/realistic-halloween-cemetery-background_52683-23097.jpg?w=740&t=st=1704683686~exp=1704684286~hmac=8f2b4d3f163c51b9fb65dabcda93394e809208f30d9faab7c3634f78d976ffcb"},
    {image:"https://img.freepik.com/free-vector/halloween-night-moon-composition-with-glowing-pumpkins-vintage-castle-bats-flying-cemetery-flat_1284-40781.jpg?t=st=1704619937~exp=1704620537~hmac=e904962aeb00debc6eb956b9ca3ce638d2369d06f628d2acd0b293263550b9d5"}
  ]
  useEffect(() => {
    const text = parallax.current.querySelector('.array-txt');
    const lefttree = parallax.current.querySelector('.left-tree')
    const righttree = parallax.current.querySelector('.right-tree')
    const leftgate = parallax.current.querySelector('.left-gate')
    const rightgate = parallax.current.querySelector('.right-gate')




    const handleScroll = () => {
      let value = window.scrollY;
      text.style.marginTop = value * 2.5 + 'px';
      lefttree.style.left = value * -1.5 +'px';  
      righttree.style.left = value * 1.5 +'px';
      leftgate.style.left = value * 0.5 + 'px';
      rightgate.style.left = value * -0.5 + 'px';
      if(value>100){
        sethide(true)

      }
      else{
        sethide(false)
      }

    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className='array-main'>
      <div className='array-nav'>
      <h1 className='logo-txt'>Logo</h1>
      <div className='array-home'>
        <div className='nav-button'>
        <h4 className='nav-txt'>Home</h4></div>
        <div className='nav-button1'><h4 className='nav-txt1'>About</h4></div>
        <div className='nav-button1'><h4 className='nav-txt1'>Service</h4></div>
        <div className='nav-button1'><h4 className='nav-txt1'>Contact</h4></div>
      </div>
      </div>
      <div className='array-background' ref={parallax}>
        <h1 className={`array-txt ${hide ? 'hide-txt':''}`}>Parallax Website</h1>
        <img className='left-tree' src='tree-left.png'/>
        <img className='right-tree' src='tree-right.png'/>
        <img className='left-gate' src='gate-left.png'/>
        <img className='right-gate' src='gate-right.png'/>
        <img className='array-grass' src='grass.png'/>
      </div>
      <div className='array-parallax'>
        <h1>Parallax Website</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.<br/>

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>

      </div>
      <div>
        <Imageslider images={image}/>
      </div>
      <div className='array-parallax'>
        <h1>Parallax Website</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.<br/>

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>

      </div>
    </div>
  )
}

export default Array