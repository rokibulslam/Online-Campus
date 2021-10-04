import React from 'react';
import { Link } from 'react-router-dom';

const Universities = () => {
    return (
        <div className="m-5 overflow-hidden">
            <div className="row">
                <div className="col-md-3"> <img src="https://prod-discovery.edx-cdn.org/organization/logos/2a73d2ce-c34a-4e08-8223-83bca9d2f01d-2cc8854c6fee.png" alt="" /></div>
                <div className="col-md-3"><img src="https://prod-discovery.edx-cdn.org/organization/logos/44022f13-20df-4666-9111-cede3e5dc5b6-2cc39992c67a.png" alt="" /></div>
                <div className="col-md-3"><img src="https://prod-discovery.edx-cdn.org/organization/logos/54bc81cb-b736-4505-aa51-dd2b18c61d84-2082c7ba1024.png" alt="" /></div>
                <div className="col-md-3"><img src="https://prod-discovery.edx-cdn.org/organization/logos/3f0d28e5-eeb4-4e0f-9617-39546a3df0c8-1bfe1d50b12f.png" alt="" /></div>
            </div>
            <Link to="/courses">
                <h1 className="text-black text-decoration-none pt-5 fs-3 fw-light"> Learn From Direct Universities...</h1>
            </Link>
        </div>
    );
};

export default Universities;