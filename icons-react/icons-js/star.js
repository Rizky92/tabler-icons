import * as React from "react";

const IconStar = (size = 24, color = "currentColor", stroke = 2, ...props) => <svg className="icon icon-tabler icon-tabler-star" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-4.993 -4.867l6.9 -1.002l3.086 -6.253l3.086 6.253l6.9 1.002l-4.993 4.867l1.179 6.873z" /></svg>;

export default IconStar;