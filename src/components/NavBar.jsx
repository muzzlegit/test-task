import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="h-[60px]">
      <div className="h-full flex justify-center items-center gap-[20px] border-b-2">
        <NavLink
          to="/"
          style={({ isActive }) => {
            return {
              // boxSizing: 'border-box',
              // width: '100%',
              // padding: '4px 10px 8px 10px',
              // fontSize: '30px',
              // fontWeight: 'bold',
              // textDecoration: 'none',
              // color: isActive ? theme.colors.acent : theme.colors.grey,
              // borderRadius: isActive ? '10px' : 'none',
              // boxShadow: isActive ? theme.shadows.submitButtonShadow : 'none',
            };
          }}
        >
          <span>Home</span>
        </NavLink>

        <>
          <NavLink
            to="/tweets"
            style={({ isActive }) => {
              return {
                // boxSizing: 'border-box',
                // width: '100%',
                // padding: '4px 10px 8px 10px',
                // fontSize: '30px',
                // fontWeight: 'bold',
                // textDecoration: 'none',
                // color: isActive ? theme.colors.acent : theme.colors.grey,
                // borderRadius: isActive ? '10px' : 'none',
                // boxShadow: isActive ? theme.shadows.submitButtonShadow : 'none',
              };
            }}
          >
            <span>TWEETS</span>
          </NavLink>
        </>
      </div>
    </nav>
  );
};

export default NavBar;
