import { logo } from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt="sumz_logo" className='w-28 object-contain' />
        <button
        type='button'
        onClick={()=> window.open('https://github.com/aafrzl', '_blank')}
        className='black_btn'
        >
          Github
        </button>
      </nav>
      <h1 className='head_text'>
        Rangkum Article dengan <br className='max-md:hidden' /> <span className='orange_gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Aplikasi web untuk merangkum artikel dengan cepat dan mudah, open source dan gratis. di dukung dengan teknologi OpenAI GPT-4.
      </h2>
    </header>
  )
}

export default Hero
