import React from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import { toast } from "react-toastify";

const AddJob = () => {
  const { logedInUser } = useAuth();
  const handleAddJobs = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const jobData = Object.fromEntries(formData.entries());
    // rest api
    const { min, max, currency, requirements, responsibilities, ...newJobs } =
      jobData;
    // salaryRange
    newJobs.salaryRange = { min, max, currency };
    // requirements
    const requirementsArray = requirements.split(",");
    const cleearRequirementsArray = requirementsArray.map((skill) =>
      skill.trim()
    );
    newJobs.requirements = cleearRequirementsArray;
    // responsibilities
    const responsibilitiesArray = responsibilities.split(",");
    const clearResponsibilitiesArray = responsibilitiesArray.map((req) =>
      req.trim()
    );
    newJobs.responsibilities = clearResponsibilitiesArray;
    // console.log(newJobs);

    axios
      .post("http://localhost:3000/jobs", newJobs)
      .then((res) => {
        // console.log(res.data);
        if (res.data.insertedId) {
          toast.success("job Added Successfully");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="w-11/12 mx-auto">
      <h3 className="text-4xl text-center py-4">Add A Hot Job </h3>
      <form
        onSubmit={handleAddJobs}
        className="bg-base-300 py-6 px-4 rounded-2xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4 ">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">title</legend>
            <input
              type="text"
              name="title"
              className="input w-full"
              placeholder="Job Title"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Location</legend>
            <input
              type="text"
              name="location"
              className="input w-full"
              placeholder="Job Location"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Category</legend>
            <select
              defaultValue="Select Category"
              name="category"
              className="select w-full"
            >
              <option disabled={true}>Select one</option>
              <option value="Engineer">Engineer</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Web Developer">Web Developer</option>
              <option value="Support Agency">Support Agency </option>
              <option value="UI/UX Designer">UI/UX Designer </option>
            </select>
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Job Type</legend>
            <div className="filter">
              <input
                className="btn filter-reset"
                type="radio"
                name="jobType"
                aria-label="All"
              />
              <input
                className="btn"
                type="radio"
                name="jobType"
                aria-label="On-Site"
                value="On-Site"
              />
              <input
                className="btn"
                type="radio"
                name="jobType"
                aria-label="Remote"
                value="Remote"
              />
              <input
                className="btn"
                type="radio"
                name="jobType"
                aria-label="Hybrid"
                value="Hybrid"
              />
            </div>
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Company Name</legend>
            <input
              type="text"
              name="company"
              className="input w-full"
              placeholder="Company Name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Company Logo URL</legend>
            <input
              type="text"
              name="company_logo"
              className="input w-full"
              placeholder="Company Logo URL"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">HR Name</legend>
            <input
              type="text"
              name="hr_name"
              className="input w-full"
              placeholder="HR Name"
              // add user name after update username in firebase
              // defaultValue={logedInUser?.email}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">HR Email</legend>
            <input
              type="email"
              name="hr_email"
              className="input w-full"
              defaultValue={logedInUser?.email}
            />
          </fieldset>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Minimum Salary</legend>
            <input type="number" name="min" className="input w-full" />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Maximum Salary</legend>
            <input type="number" name="max" className="input w-full" />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">currency</legend>
            <select name="currency" className="select w-full">
              <option>select currency</option>
              <option value="AFN">Afghan Afghani</option>
              <option value="ALL">Albanian Lek</option>
              <option value="DZD">Algerian Dinar</option>
              <option value="AOA">Angolan Kwanza</option>
              <option value="ARS">Argentine Peso</option>
              <option value="AMD">Armenian Dram</option>
              <option value="AWG">Aruban Florin</option>
              <option value="AUD">Australian Dollar</option>
              <option value="AZN">Azerbaijani Manat</option>
              <option value="BSD">Bahamian Dollar</option>
              <option value="BHD">Bahraini Dinar</option>
              <option value="BDT">Bangladeshi Taka</option>
              <option value="BBD">Barbadian Dollar</option>
              <option value="BYN">Belarusian Ruble</option>
              <option value="BZD">Belize Dollar</option>
              <option value="BMD">Bermudan Dollar</option>
              <option value="BTN">Bhutanese Ngultrum</option>
              <option value="BTC">Bitcoin</option>
              <option value="BOB">Bolivian Boliviano</option>
              <option value="BAM">Bosnia-Herzegovina Convertible Mark</option>
              <option value="BWP">Botswanan Pula</option>
              <option value="BRL">Brazilian Real</option>
              <option value="GBP">British Pound Sterling</option>
              <option value="BND">Brunei Dollar</option>
              <option value="BGN">Bulgarian Lev</option>
              <option value="BIF">Burundian Franc</option>
              <option value="KHR">Cambodian Riel</option>
              <option value="CAD">Canadian Dollar</option>
              <option value="CVE">Cape Verdean Escudo</option>
              <option value="KYD">Cayman Islands Dollar</option>
              <option value="XOF">CFA Franc BCEAO</option>
              <option value="XAF">CFA Franc BEAC</option>
              <option value="XPF">CFP Franc</option>
              <option value="CLP">Chilean Peso</option>
              <option value="CNY">Chinese Yuan</option>
              <option value="COP">Colombian Peso</option>
              <option value="KMF">Comorian Franc</option>
              <option value="CDF">Congolese Franc</option>
              <option value="CRC">Costa Rican Colón</option>
              <option value="HRK">Croatian Kuna</option>
              <option value="CUC">Cuban Convertible Peso</option>
              <option value="CZK">Czech Koruna</option>
              <option value="DKK">Danish Krone</option>
              <option value="DJF">Djiboutian Franc</option>
              <option value="DOP">Dominican Peso</option>
              <option value="XCD">East Caribbean Dollar</option>
              <option value="EGP">Egyptian Pound</option>
              <option value="ERN">Eritrean Nakfa</option>
              <option value="ETB">Ethiopian Birr</option>
              <option value="EUR">Euro</option>
              <option value="FKP">Falkland Islands Pound</option>
              <option value="FJD">Fijian Dollar</option>
              <option value="GMD">Gambian Dalasi</option>
              <option value="GEL">Georgian Lari</option>
              <option value="GHS">Ghanaian Cedi</option>
              <option value="GIP">Gibraltar Pound</option>
              <option value="GTQ">Guatemalan Quetzal</option>
              <option value="GNF">Guinean Franc</option>
              <option value="GYD">Guyanaese Dollar</option>
              <option value="HTG">Haitian Gourde</option>
              <option value="HNL">Honduran Lempira</option>
              <option value="HKD">Hong Kong Dollar</option>
              <option value="HUF">Hungarian Forint</option>
              <option value="ISK">Icelandic Króna</option>
              <option value="INR">Indian Rupee</option>
              <option value="IDR">Indonesian Rupiah</option>
              <option value="IRR">Iranian Rial</option>
              <option value="IQD">Iraqi Dinar</option>
              <option value="ILS">Israeli New Sheqel</option>
              <option value="JMD">Jamaican Dollar</option>
              <option value="JPY">Japanese Yen</option>
              <option value="JOD">Jordanian Dinar</option>
              <option value="KZT">Kazakhstani Tenge</option>
              <option value="KES">Kenyan Shilling</option>
              <option value="KWD">Kuwaiti Dinar</option>
              <option value="KGS">Kyrgystani Som</option>
              <option value="LAK">Laotian Kip</option>
              <option value="LBP">Lebanese Pound</option>
              <option value="LSL">Lesotho Loti</option>
              <option value="LRD">Liberian Dollar</option>
              <option value="LYD">Libyan Dinar</option>
              <option value="MOP">Macanese Pataca</option>
              <option value="MKD">Macedonian Denar</option>
              <option value="MGA">Malagasy Ariary</option>
              <option value="MWK">Malawian Kwacha</option>
              <option value="MYR">Malaysian Ringgit</option>
              <option value="MVR">Maldivian Rufiyaa</option>
              <option value="MRU">Mauritanian Ouguiya</option>
              <option value="MUR">Mauritian Rupee</option>
              <option value="MXN">Mexican Peso</option>
              <option value="MDL">Moldovan Leu</option>
              <option value="MNT">Mongolian Tugrik</option>
              <option value="MAD">Moroccan Dirham</option>
              <option value="MZN">Mozambican Metical</option>
              <option value="MMK">Myanmar Kyat</option>
              <option value="NAD">Namibian Dollar</option>
              <option value="NPR">Nepalese Rupee</option>
              <option value="ANG">Netherlands Antillean Guilder</option>
              <option value="TWD">New Taiwan Dollar</option>
              <option value="NZD">New Zealand Dollar</option>
              <option value="NIO">Nicaraguan Córdoba</option>
              <option value="NGN">Nigerian Naira</option>
              <option value="KPW">North Korean Won</option>
              <option value="NOK">Norwegian Krone</option>
              <option value="OMR">Omani Rial</option>
              <option value="PKR">Pakistani Rupee</option>
              <option value="PAB">Panamanian Balboa</option>
              <option value="PGK">Papua New Guinean Kina</option>
              <option value="PYG">Paraguayan Guarani</option>
              <option value="PEN">Peruvian Sol</option>
              <option value="PHP">Philippine Peso</option>
              <option value="PLN">Polish Zloty</option>
              <option value="QAR">Qatari Rial</option>
              <option value="RON">Romanian Leu</option>
              <option value="RUB">Russian Ruble</option>
              <option value="RWF">Rwandan Franc</option>
              <option value="SAR">Saudi Riyal</option>
              <option value="SDG">Sudanese Pound</option>
              <option value="SRD">Surinamese Dollar</option>
              <option value="SZL">Swazi Lilangeni</option>
              <option value="SEK">Swedish Krona</option>
              <option value="CHF">Swiss Franc</option>
              <option value="STN">São Tomé and Príncipe Dobra</option>
              <option value="VES">Venezuelan Bolívar</option>
              <option value="ZMW">Zambian Kwacha</option>
            </select>
          </fieldset>
        </div>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">DeadLine</legend>
          <input
            type="date"
            name="applicationDeadline"
            className="input w-full"
          />
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Description</legend>
          <textarea
            className="textarea w-full"
            name="description"
            placeholder="descriptions"
          ></textarea>
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Requirements</legend>
          <textarea
            className="textarea w-full"
            name="requirements"
            placeholder="add requirements seperate with comma "
          ></textarea>
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Responsibilities</legend>
          <textarea
            className="textarea w-full"
            name="responsibilities"
            placeholder="add responsibilities seperate with comma "
          ></textarea>
        </fieldset>

        <input type="submit" className="btn w-full mt-4" value="Add Job" />
      </form>
    </div>
  );
};

export default AddJob;
