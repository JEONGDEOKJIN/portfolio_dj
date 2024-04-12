import React from 'react'

const NavItem = ({hrefLink, text} : any) => {
  return (
    <>
        <div className="flex items-center ml-3 transition-all duration-200 ease-in-out hover:text-neutral-500">
          <a href={hrefLink}>
            {text}
          </a>
        </div>
    </>
  )
}

export default NavItem