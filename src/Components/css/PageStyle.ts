import CSS from "csstype";
import { url } from "inspector";
import backgroundImg from "../../Assets/background.png";
import "./PageStyle.css";

export const pageBackground : CSS.Properties= {
    backgroundImage:`url(${backgroundImg})`,
};

export const buttonStyle : CSS.Properties= {
        backgroundColor: "#E1112C",
        textAlign: "center",
        fontSize: "22px",
        borderRadius: "25px",
        width: "300px",
        height: "100px",
        fontFamily: "OpenSansBold",
        fontWeight: "bold",
        color: "white",
};
export const payPalButtonStyle : CSS.Properties= {
        width: "200px",
        height: "100px",
};

export const textStyleH1 : CSS.Properties= {
    fontFamily: "OpenSansExtraBold",
    fontWeight: "bold",
    fontSize: "28px",
}

export const textStyleH2 : CSS.Properties= {
    fontFamily: "OpenSansBold",
    fontSize: "16px",
};

export const gridContainer: CSS.Properties={
    display:"grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "1fr 1fr 1fr 1fr",
    gap: "70px 0px",
    gridTemplateAreas: "'.' '.' '.' '.'"
};

