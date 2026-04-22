import { logoIconsList } from "../constants";


const LogoIcon = ({ icon }) => {
    return (
        <div className="flex-none flex-center marquee-item">

            <img src={icon.imgPath} alt={icon.name} />
        </div>
    )
}

const LogoSection = () => {
    return (
        <div className="md my-20 my-10 relative">
            <div className="gradient-edge" />
            <div className="gradient-edge" />

            <div className="marquee h-52">
                {/* animation to the left, look in css */}
                <div className="marquee-box md:gap-12 gap-5">
                    {logoIconsList.map((icon, idx) => (
                        // use imgPath + index as a stable unique key (logo objects don't have `name`)
                        <LogoIcon key={`${icon.imgPath}-${idx}`} icon={icon} />
                    ))}

                    {/* if you need the logos duplicated for the marquee, concatenate the array
                        and include the index to keep keys unique:
                        {logoIconsList.concat(logoIconsList).map((icon, idx) => (
                            <LogoIcon key={`${icon.imgPath}-${idx}`} icon={icon} />
                        ))}
                    */}
                </div>

            </div>
        </div>
    );
};

export default LogoSection;