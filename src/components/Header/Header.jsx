import header from "../../assets/images/profile.png"

const Header = () => {
    return (
        <div className="flex justify-between py-9 max-w-7xl mx-auto my-1 border-b-2">
             <h1 className='text-4xl font-bold'> Knowledge cafe </h1>
             <img src= {header} alt="picture" />
        </div>
    );
};

export default Header;