import profile from '../../assets/images/profile.png';

const Header = () => {
  return (
  <header className='container mx-auto md:px-12 sm:px-8 max-sm:px-4'>
    <div className='flex justify-between items-center border-b-2 py-4'>
      <h1 className='text-3xl font-bold'>Knowledge Cafe</h1>
      <img src={profile} alt="profile picture" />
    </div>
  </header>
)
}

export default Header