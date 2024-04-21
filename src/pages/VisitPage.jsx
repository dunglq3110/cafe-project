import React from 'react';
import { Link } from 'react-router-dom';
function VisitPage() {
    return (
        <div className="VisitPage">

            <Link to="/manager">
                < button className="w-25 p-3 rounded align-items-center gradient-custom-2">
                    Visit Us
                </button>
            </Link>
        </div >
    );
}

export default VisitPage;    
