import '../../css/Sidebarmenu.css'
const SidebarMenu = () => {
    return (
        // <div>
        //     <div>
        //         <i className="bi bi-bootstrap-fill my-2"></i>
        //         <span className="brand-name fs-4 text-red">Yousaf</span>
        //     </div>
        //     <hr className="text-dark" />
        // </div>
        // <div className="container-fluid">
        //     <div className="row">
        //         <div className="col-auto col-sm-2 bg-dark d-flex flex-column justify-content-between min-vh-100">
        //             <div className="mt-2">
        //                 <a className="text-decoration-none ms-4 d-flex align-items-center text-white d-none d-sm-inline" role="button">
        //                     <span className="fs-5">Side Menu</span>
        //                 </a>
        //                 <hr className="text-white d-none d-sm-block" />
        //                 {/* cú pháp nhanh bs5-ul... -> chọn cái có nav-taps - cái thứ 9 */}
        //                 <ul
        //                     className="nav nav-pills flex-column mt-2 mt-sm-0" id="parentM"
        //                 >
        //                     <li className="nav-item my-1 py-2 py-sm-0">
        //                         <a href="#" className="nav-link text-white text-center text-sm-start" aria-current="page">
        //                             <i className="bi bi-speedometer2"></i>
        //                             <span className="ms-2 d-none d-sm-inline">Dashboard</span>
        //                         </a>
        //                     </li>
        //                     <li className="nav-item my-1 py-2 py-sm-0">
        //                         <a href="#submenu" className="nav-link text-white text-center text-sm-start" data-bs-toggle="collapse" aria-current="page">
        //                             <i className="bi bi-grid"></i>
        //                             <span className="ms-2 d-none d-sm-inline">Products</span>
        //                             <i className="bi bi-arrow-down-short ms-0 ms-sm-3"></i>
        //                         </a>
        //                         {/* cú pháp nhanh bs5-ul... -> chọn cái có bs-nav-ul - cái đầu tiên  */}

        //                         <ul
        //                             className="nav collapse ms-2 flex-column" id="submenu" data-bs-parent="#parentM"
        //                         >
        //                             <li className="nav-item">
        //                                 <a className="nav-link text-white" href="#" aria-current="page">
        //                                     <span className='d-none d-sm-inline'>Item</span> 1
        //                                 </a>
        //                             </li>
        //                             <li className="nav-item">
        //                                 <a className="nav-link text-white" href="#">
        //                                     <span className='d-none d-sm-inline'>Item</span> 2
        //                                 </a>
        //                             </li>
        //                         </ul>

        //                     </li>
        //                     <li className="nav-item my-1 py-2 py-sm-0">
        //                         <a href="#" className="nav-link text-white text-center text-sm-start" aria-current="page">
        //                             <i className="bi bi-house"></i>
        //                             <span className="ms-2 d-none d-sm-inline">House</span>
        //                         </a>
        //                     </li>
        //                     <li className="nav-item my-1 py-2 py-sm-0">
        //                         <a href="#" className="nav-link text-white text-center text-sm-start" aria-current="page">
        //                             <i className="bi bi-people"></i>
        //                             <span className="ms-2 d-none d-sm-inline">Customers</span>
        //                         </a>
        //                     </li>
        //                 </ul>
        //             </div>
        //             {/* cú pháp nhanh bs5-dro... -> chọn cái có từ anchor - cái thứ 2 */}
        //             <div className="dropdown open">
        //                 <a
        //                     className="btn border-none dropdown-toggle text-white"
        //                     type="button"
        //                     id="triggerId"
        //                     data-bs-toggle="dropdown"
        //                     aria-haspopup="true"
        //                     aria-expanded="false"
        //                 >
        //                     <i className="bi bi-person fs-5"></i>
        //                     <span className="fs-5 ms-3 d-none d-sm-inline">Yousaf</span>
        //                 </a>
        //                 <div className="dropdown-menu" aria-labelledby="triggerId">
        //                     <a className="dropdown-item" href="#">Profile</a>
        //                     <a className="dropdown-item" href="#">Setting</a>
        //                 </div>
        //             </div>

        //         </div>
        //     </div>
        // </div>
        <div className="bg-dark d-flex flex-column justify-content-between min-vh-100">
            <div className="mt-2">
                <a className="text-decoration-none ms-4 d-flex align-items-center text-white d-none d-sm-inline" role="button">
                    <span className="fs-5">Side Menu</span>
                </a>
                <hr className="text-white d-none d-sm-block" />
                {/* cú pháp nhanh bs5-ul... -> chọn cái có nav-taps - cái thứ 9 */}
                <ul
                    className="nav nav-pills flex-column mt-2 mt-sm-0" id="parentM"
                >
                    <li className="nav-item my-1 py-2 py-sm-0">
                        <a href="#" className="nav-link text-white text-center text-sm-start" aria-current="page">
                            <i className="bi bi-speedometer2"></i>
                            <span className="ms-2 d-none d-sm-inline">Dashboard</span>
                        </a>
                    </li>
                    <li className="nav-item my-1 py-2 py-sm-0">
                        <a href="#submenu" className="nav-link text-white text-center text-sm-start" data-bs-toggle="collapse" aria-current="page">
                            <i className="bi bi-grid"></i>
                            <span className="ms-2 d-none d-sm-inline">Products</span>
                            <i className="bi bi-arrow-down-short ms-0 ms-sm-3"></i>
                        </a>
                        {/* cú pháp nhanh bs5-ul... -> chọn cái có bs-nav-ul - cái đầu tiên  */}

                        <ul
                            className="nav collapse ms-2 flex-column" id="submenu" data-bs-parent="#parentM"
                        >
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#" aria-current="page">
                                    <span className='d-none d-sm-inline'>Item</span> 1
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">
                                    <span className='d-none d-sm-inline'>Item</span> 2
                                </a>
                            </li>
                        </ul>

                    </li>
                    <li className="nav-item my-1 py-2 py-sm-0">
                        <a href="#" className="nav-link text-white text-center text-sm-start" aria-current="page">
                            <i className="bi bi-house"></i>
                            <span className="ms-2 d-none d-sm-inline">House</span>
                        </a>
                    </li>
                    <li className="nav-item my-1 py-2 py-sm-0">
                        <a href="#" className="nav-link text-white text-center text-sm-start" aria-current="page">
                            <i className="bi bi-people"></i>
                            <span className="ms-2 d-none d-sm-inline">Customers</span>
                        </a>
                    </li>
                </ul>
            </div>
            {/* cú pháp nhanh bs5-dro... -> chọn cái có từ anchor - cái thứ 2 */}
            <div className="dropdown open">
                <a
                    className="btn border-none dropdown-toggle text-white"
                    type="button"
                    id="triggerId"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    <i className="bi bi-person fs-5"></i>
                    <span className="fs-5 ms-3 d-none d-sm-inline">Yousaf</span>
                </a>
                <div className="dropdown-menu" aria-labelledby="triggerId">
                    <a className="dropdown-item" href="#">Profile</a>
                    <a className="dropdown-item" href="#">Setting</a>
                </div>
            </div>

        </div>
    )
}

export default SidebarMenu;