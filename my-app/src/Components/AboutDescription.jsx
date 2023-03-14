import banner from '../about.svg';
import Details from './HousePage/Details';

function Description () {
    const textOfReliability = "The ads posted on Kasa guarantee total reliability of the place. The photos are consistent with the accommodations, and all information is regularly checked by our teams.";
    const textOfRespect = "Caring is one of the founding values of Kasa. Any discriminatory behavior or disruptive behavior in the neighborhood will result in exclusion from our platform."
    const textOfService = "Our teams are at your disposal to provide you with the best experience. Please do not hesitate to contact us if you have any questions."
    const textOfSafety = "Safety is Kasa's priority. Both for our guests and for travelers, each accommodation is compliant with the safety criteria established by our services. By leaving a note for both the host and the tenant, our teams can verify that the standards are respected. We also organize workshops on home security for our guests."


    return (
        <div className='About-Desc'>
            <div className='banner-img'>
                <img src={banner} alt="banner" />
            </div>
            <div>
                <div className='descriptions-abt'>
                    <Details name="Reliability" content = {textOfReliability} />                        
                </div>
            </div>
            <br/>
            <div>
                <div className='descriptions-abt'>
                    <Details name="Respect" content = {textOfRespect} />
                </div>
            </div>
            <br/>
            <div>
                <div className='descriptions-abt'>
                    <Details name="Service" content = {textOfService} />
                </div>
            </div>
            <br/>
            <div>
                <div className='descriptions-abt'>
                    <Details name="Safety" content = {textOfSafety} />
                </div>
            </div>
        </div>
    )
}

export default Description;