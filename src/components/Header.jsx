
import "./Header.css"
export const Header = ({openModel}) => {
  return (
    <header className='header'>
        <h1 className='header-title'>CNAPP DashBoard</h1>

        <button onClick={openModel} className="add-widget-button">+  Add Widget </button>
    </header>
  )
}
