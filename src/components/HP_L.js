    import React from 'react'
    import {Link} from 'react-router-dom';

function HP_L() {
return (
<div className="k-container k-padding-big quinquecolor-bg clearfix HP_L_bg">
    <div className="[ zeb-12 zeb-m-12 ]">
        <div className="[ zeb-1 zeb-m-12 ]">&nbsp;</div>
        <div className="[ zeb-10 zeb-m-12 ]">
            <div className="k-panel flexxer align-center just-center wrapit">
                <div className="[ zeb-8 zeb-m-12 ]">
                    <div className="">
                        <h4 className='k-padding-tiny'>
                            Howard Phillips Lovecraft (August 20, 1890 - March 15, 1937) was an
                            American writer of weird, science, fantasy, and horror fiction.
                        </h4>
                        <h4 className='k-padding-tiny'>
                        Lovecraft is best known for
                            his creation of the Cthulhu Mythos.
                        </h4>
                        
                        <Link to={{ pathname:"https://en.wikipedia.org/wiki/H._P._Lovecraft"}} target="_blank">
                        <span className='k-btn trescolor-bg albus-txt txt-bigger tres-hover'>Read his Wiki</span>   
                        </Link>
                    </div>
                </div>
                <div className="[ zeb-1 zeb-m-12 ]">&nbsp;</div>
                <div className="[ zeb-3 zeb-m-12 ]">
                    <figure className='txt-center'>
                        <img src="images/hpl.jpg" alt="" />
                    </figure>

                </div>
            </div>
        </div>
        <div className="[ zeb-1 zeb-m-12 ]">&nbsp;</div>
    </div>
</div>
)
}

export default HP_L