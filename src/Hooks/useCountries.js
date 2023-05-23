import axios from 'axios'

import react, { useEffect, useState } from 'react'

export default function useCountries() {
    const [countriesArray, setCountriesArray] = useState([])
    var countryShortlist = [
        "AR", "AU", "AT", "BE", "BR", "BG", "CA", "CN", "CO", "CU", "CZ", "EG", "FR", "DE", "GR", "HK", "HU", "IN", "ID", "IE", "IT", "JP", "KR", "LV", "LT", "MY", "MX", "MA", "NL", "NG", "NO", "PH", "PL", "PT", "RO", "RS", "RU", "SA", "SG", "SK", "SI", "ZA", "SE", "CH", "TW", "TH", "TR", "UA", "AE", "GB", "US", "VE"
    ]
    async function getCountries() {
        const { data } = await axios("https://pkgstore.datahub.io/core/country-list/data_json/data/8c458f2d15d9f2119654b29ede6e45b8/data_json.json");
        let filterResult = data.filter((country) => { return countryShortlist.includes(country.Code) });
        setCountriesArray(filterResult);
    }
    useEffect(() => {
        getCountries();
    }, [])
    return countriesArray
}
