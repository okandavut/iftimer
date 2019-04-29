import React, { useState, useEffect } from "react";
import axios from "axios";
import * as bulmaStyles from "bulma";
import Countdown from "./react-countdown.js";
import customStyle from "./style.scss";

function Iftimer() {
    const [state, setState] = useState(null);
    const [cities, setCities] = useState([]);
    const [city, setCity] = useState(539);
    const [districts, setDistricts] = useState([]);
    const [district, setDistrict] = useState(9541);
    const [openTime, setOpenTime] = useState("20:14");
    const [result, setResult] = useState("IFTARA SON 6 SAAT");

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const day = currentDate.getDate();
    if (day < 10) day = "0" + day;
    month = month + 1;
    if (month < 10) month = "0" + month;

    useEffect(() => {
        axios({
            method: "get",
            url: `  https://ezanvakti.herokuapp.com/sehirler?ulke=2`
        }).then(obj => {
            setCities(obj.data);
        });
    }, []);

    function getDistricts(city) {
        setCity(city);
        axios({
            method: "get",
            url: `https://ezanvakti.herokuapp.com/ilceler?sehir=${city}`
        }).then(obj => {
            setDistricts(obj.data);
        });
    }

    function getTimes(district) {
        setDistrict(district);
        axios({
            method: "get",
            url: `https://ezanvakti.herokuapp.com/vakitler?ilce=${district}`
        }).then(obj => {
            setOpenTime(obj.data[1].Aksam);
        });
    }

    return (
        <>
            <h1 class={"title"}>İftara Ne Kadar Kaldı?</h1>
            <div className={customStyle.FieldContainer}>
                <div className={"select is-primary is-medium "}>
                    <select onChange={e => getDistricts(e.target.value)}>
                        <option disabled selected value>
                            Lütfen Şehir Seçiniz
                        </option>
                        {cities.map((cityItem, index) => {
                            return (
                                <option key={index} value={cityItem.SehirID}>
                                    {cityItem.SehirAdi}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className={"select is-primary is-medium"}>
                    <select onChange={e => getTimes(e.target.value)}>
                        <option disabled selected value>
                            Lütfen İlçe Seçiniz
                        </option>
                        {districts.map((districtItem, index) => {
                            return (
                                <option key={index} value={districtItem.IlceID}>
                                    {districtItem.IlceAdi}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <Countdown date={`${year}-${month}-${day}T${openTime}:00`} />{" "}
            </div>
            <br />
        </>
    );
}

export { Iftimer as default };
