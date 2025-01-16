import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

//Main!
import MainPage from "./pages/MainPage/MainPage";
import Plirofories from "./pages/Plirofories/Plirofories";
import Epikoinonia from "./pages/Epikoinonia/Epikoinonia";

//Everything Parent
import Search1 from "./pages/Search1/Search1";
import Search2 from "./pages/Search2/Search2";
import Search3 from "./pages/Search3/Search3";
import ParentRegistration1 from "./pages/ParentRegistration1/ParentRegistration1";
import ParentRegistration2 from "./pages/ParentRegistration2/ParentRegistration2";
import ParentRegistration3 from "./pages/ParentRegistration3/ParentRegistration3";
import ParentRegistration4 from "./pages/ParentRegistration4/ParentRegistration4";
import ParentRegistration5 from "./pages/ParentRegistration5/ParentRegistration5";
import ParentRegistration6 from "./pages/ParentRegistration6/ParentRegistration6";
import ProgrammatismosRantevou from "./pages/ProgrammatismosRantevou/ProgrammatismosRantevou";
import ProgrammatismosRantevou2 from "./pages/ProgrammatismosRantevou2/ProgrammatismosRantevou2";
import AitisiEndiaferontos from "./pages/AitisiEndiaferontos/AitisiEndiaferontos";
import AitisiEndiaferontos2 from "./pages/AitisiEndiaferontos2/AitisiEndiaferontos2";
import AitisiEndiaferontos3 from "./pages/AitisiEndiaferontos3/AitisiEndiaferontos3";
import ParentProfile from "./pages/ParentProfile/ParentProfile";
import EditAgreementForm1 from "./pages/EditAgreement1/EditAgreement1";
import EditAgreementForm2 from "./pages/EditAgreement2/EditAgreement2";
import EditAgreementForm3 from "./pages/EditAgreement3/EditAgreement3";
import EditAgreementForm4 from "./pages/EditAgreement4/EditAgreement4";
import EditAgreementForm5 from "./pages/EditAgreement5/EditAgreement5";
import EditAgreementForm6 from "./pages/EditAgreement6/EditAgreement6";
import ParentEditProfile from "./pages/ParentEditProfile/ParentEditProfile";
import ParentEditMeeting from "./pages/ParentEditMeeting/ParentEditMeeting";
import ParentMessage from "./pages/ParentMessage/ParentMessage";

//Everything Nanny
import NannyEligibility from "./pages/NannyEligibility/NannyEligibility";
import NannyRegistration1 from "./pages/NannyRegistration1/NannyRegistration1";
import NannyRegistration2 from "./pages/NannyRegistration2/NannyRegistration2";
import NannyRegistration3 from "./pages/NannyRegistration3/NannyRegistration3";
import NannyRegistration4 from "./pages/NannyRegistration4/NannyRegistration4";
import NannyRegistration5 from "./pages/NannyRegistration5/NannyRegistration5";
import NannyRegistration6 from "./pages/NannyRegistration6/NannyRegistration6";
import AdCreation1 from "./pages/AdCreation1/AdCreation1";
import AdCreation2 from "./pages/AdCreation2/AdCreation2";
import AdCreation3 from "./pages/AdCreation3/AdCreation3";
import NannyProfile from "./pages/NannyProfile/NannyProfile";
import NannyEditProfile from "./pages/NannyEditProfile/NannyEditProfile";
import NannyEditMeeting from "./pages/NannyEditMeeting/NannyEditMeeting";
import NannyEditAgreement1 from "./pages/NannyEditAgreement1/NannyEditAgreement1";
import NannyEditAgreement2 from "./pages/NannyEditAgreement2/NannyEditAgreement2";
import NannyMessage from "./pages/NannyMessage/NannyMessage";

//Profile History Parent
import IstorikoGonewnArxikh from "./pages/IstorikoGonewn/IstorikoGonewn_Arxikh";
import IstorikoGonewnRantevouProsexws from "./pages/IstorikoGonewn/IstorikoGonewn_Rantevou_Prosexws";
import IstorikoGonewnRantevouOloklhrwmena from "./pages/IstorikoGonewn/IstorikoGonewn_Rantevou_Oloklhrwmena";
import IstorikoGonewnRantevouAkyrwmena from "./pages/IstorikoGonewn/IstorikoGonewn_Rantevou_Akyrwmena";
import IstorikoGonewnAithseisEndiaferontosEkkremothta from "./pages/IstorikoGonewn/IstorikoGonewn_AithseisEndiaferontos_Ekkremothta";
import IstorikoGonewnAithseisEndiaferontosOloklhrwmenes from "./pages/IstorikoGonewn/IstorikoGonewn_AithseisEndiaferontos_Oloklhrwmenes";
import IstorikoGonewnIdiwtikaSymfwnhtikaEkkremothta from "./pages/IstorikoGonewn/IstorikoGonewn_IdiwtikaSymfwnhtika_Ekkremothta";
import IstorikoGonewnIdiwtikaSymfwnhtikaOloklhrwmena from "./pages/IstorikoGonewn/IstorikoGonewn_IdiwtikaSymfwnhtika_Oloklhrwmena";
import YpografhIdiwtikouSymfwnhtikou from "./pages/YpografhIdiwtikouSymfwnhtikou(Goneas)/YpografhIdiwtikouSymfwnhtikou";
import YpografhIdiwtikouSymfwnhtikou2 from "./pages/YpografhIdiwtikouSymfwnhtikou(Goneas)/YpografhIdiwtikouSymfwnhtikou2";
import IstorikoGonewnPlhrwmes from "./pages/IstorikoGonewn/IstorikoGonewn_Plhrwmes";
import PlhrwmhArxikh from "./pages/Plhrwmh/Plhrwmh_Arxikh";
import PlhrwmhForma from "./pages/Plhrwmh/Plhrwmh_Forma";
import PlhrwmhVoucher from "./pages/Plhrwmh/Plhrwmh_Voucher";
import PlhrwmhEpivevaiwsh from "./pages/Plhrwmh/Plhrwmh_Epivevaiwsh";
import IstorikoGonewnAksiologhseis from "./pages/IstorikoGonewn/IstorikoGonewn_Aksiologhseis";
import IstorikoGonewnEidopoihseis from "./pages/IstorikoGonewn/IstorikoGonewn_Eidopoihseis";

//Profile History Nanny
import IstorikoNtantasArxikh from "./pages/IstorikoNtantas/IstorikoNtantas_Arxikh";
import IstorikoNtantasRantevouProsexws from "./pages/IstorikoNtantas/IstorikoNtantas_Rantevou_Prosexws";
import IstorikoNtantasRantevouEpivevaiwsh from "./pages/IstorikoNtantas/IstorikoNtantas_Rantevou_Epivevaiwsh";
import IstorikoNtantasRantevouOloklhrwmena from "./pages/IstorikoNtantas/IstorikoNtantas_Rantevou_Oloklhrwmena";
import IstorikoNtantasRantevouAkyrwmena from "./pages/IstorikoNtantas/IstorikoNtantas_Rantevou_Akyrwmena";
import IstorikoNtantasAithseisEndiaferontosEkkremothta from "./pages/IstorikoNtantas/IstorikoNtantas_AithseisEndiaferontos_Ekkremothta";
import IstorikoNtantasAithseisEndiaferontosEpivevaiwsh from "./pages/IstorikoNtantas/IstorikoNtantas_AithseisEndiaferontos_Epivevaiwsh";
import IstorikoNtantasAithseisEndiaferontosOloklhrwmenes from "./pages/IstorikoNtantas/IstorikoNtantas_AithseisEndiaferontos_Oloklhrwmenes";
import IstorikoNtantasIdiwtikaSymfwnhtikaEkkremothta from "./pages/IstorikoNtantas/IstorikoNtantas_IdiwtikaSymfwnhtika_Ekkremothta";
import IstorikoNtantasIdiwtikaSymfwnhtikaOloklhrwmena from "./pages/IstorikoNtantas/IstorikoNtantas_IdiwtikaSymfwnhtika_Oloklhrwmena";
import YpografhIdiwtikouSymfwnhtikou_Ntanta from "./pages/YpografhIdiwtikouSymfwnhtikou(Ntanta)/YpografhIdiwtikouSymfwnhtikou_Ntanta";
import YpografhIdiwtikouSymfwnhtikou2_Ntanta from "./pages/YpografhIdiwtikouSymfwnhtikou(Ntanta)/YpografhIdiwtikouSymfwnhtikou2_Ntanta";
import IstorikoNtantasPlhrwmesProsexws from "./pages/IstorikoNtantas/IstorikoNtantas_Plhrwmes_Prosexws";
import ApodoxhPlhrwmhs_Arxikh from "./pages/ApodoxhPlhrwmhs/ApodoxhPlhrwmhs_Arxikh";
import ApodoxhPlhrwmhs_Epivevaiwsh from "./pages/ApodoxhPlhrwmhs/ApodoxhPlhrwmhs_Epivevaiwsh";
import IstorikoNtantasPlhrwmesOloklhrwmenes from "./pages/IstorikoNtantas/IstorikoNtantas_Plhrwmes_Oloklhrwmenes";
import IstorikoNtantasAksiologhseis from "./pages/IstorikoNtantas/IstorikoNtantas_Aksiologhseis";
import IstorikoNtantasEidopoihseis from "./pages/IstorikoNtantas/IstorikoNtantas_Eidopoihseis";



export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/*Main!*/}
          <Route path="/" element={<MainPage />} />
          <Route path="/Plirofories" element={<Plirofories />} />
          <Route path="/Epikoinonia" element={<Epikoinonia />} />

          {/*Everything Parent*/}
          <Route path="/Goneis" element={<Search1 />} />
          <Route path="/Goneis/Aggelies" element={<Search2 />} />
          <Route path="/Goneis/Aggelies/Profile" element={<Search3 />} />
          <Route path="/Goneis/Eggrafi" element={<ParentRegistration1 />} />
          <Route path="/Goneis/Eggrafi/2" element={<ParentRegistration2 />} />
          <Route path="/Goneis/Eggrafi/3" element={<ParentRegistration3 />} />
          <Route path="/Goneis/Eggrafi/4" element={<ParentRegistration4 />} />
          <Route path="/Goneis/Eggrafi/5" element={<ParentRegistration5 />} />
          <Route path="/Goneis/Eggrafi/Epitixia_Eggrafis" element={<ParentRegistration6 />} />
          <Route path="/Goneis/Aggelies/Profile/Rantevou" element={<ProgrammatismosRantevou />} />
          <Route path="/Goneis/Aggelies/Profile/Epitixia_aitisis_rantevou" element={<ProgrammatismosRantevou2 />} />
          <Route path="/Goneis/Aggelies/Profile/Aitisi_endiaferontos" element={<AitisiEndiaferontos />} />
          <Route path="/Goneis/Aggelies/Profile/Epitixia_aitisis_endiaferontos" element={<AitisiEndiaferontos2 />} />
          <Route path="/Goneis/Aggelies/Profile/Prosorini_Aitisi_endiaferontos" element={<AitisiEndiaferontos3 />} />
          <Route path="/Goneis/Profil" element={<ParentProfile />} />
          <Route path="/Goneis/Profil/Synergasies" element={<EditAgreementForm1/>} />
          <Route path="/Goneis/Profil/Synergasies/Leptomereies_Active" element={<EditAgreementForm2/>} />
          <Route path="/Goneis/Profil/Synergasies/Leptomereies_Active/Epeksergasia" element={<EditAgreementForm3/>} />
          <Route path="/Goneis/Profil/Synergasies/Leptomereies_Complete" element={<EditAgreementForm4/>} />
          <Route path="/Goneis/Profil/Synergasies/Leptomereies_Complete/Oloklirosi" element={<EditAgreementForm5/>} />
          <Route path="/Goneis/Profil/Synergasies/Leptomereies_Active/Liksi" element={<EditAgreementForm6/>} />
          <Route path="/Goneis/Profil/Epeksergasia_Stoixeion" element={<ParentEditProfile />} />
          <Route path="/Goneis/Profil/Minimata" element={<ParentMessage />} />

          {/*Everything Nanny*/}
          <Route path="/Ntantades" element={<NannyEligibility />} />
          <Route path="/Ntantades/Eggrafi" element={<NannyRegistration1 />} />
          <Route path="/Ntantades/Eggrafi/2" element={<NannyRegistration2 />} />
          <Route path="/Ntantades/Eggrafi/3" element={<NannyRegistration3 />} />
          <Route path="/Ntantades/Eggrafi/4" element={<NannyRegistration4 />} />
          <Route path="/Ntantades/Eggrafi/5" element={<NannyRegistration5 />} />
          <Route path="/Ntantades/Eggrafi/Epitixia_Eggrafis" element={<NannyRegistration6 />} />
          <Route path="/Ntantades/Dimiourgia_Aggelias" element={<AdCreation1 />} />
          <Route path="/Ntantades/Prosorini_Apothikefsi" element={<AdCreation2 />} />
          <Route path="/Ntantades/Oristiki_Ypovoli" element={<AdCreation3 />} />
          <Route path="/Ntantades/Profil" element={<NannyProfile />} />
          <Route path="/Ntantades/Profil/Epeksergasia_Stoixeion" element={<NannyEditProfile />} />
          <Route path="/Ntantades/Profil/Rantevou/Epeksergasia" element={<NannyEditMeeting />} />
          <Route path="Ntantades/Profil/Synergasies" element={<NannyEditAgreement1 />} />
          <Route path="Ntantades/Profil/Synergasies/Leptomereies_Active" element={<NannyEditAgreement2 />} />
          <Route path="/Ntantades/Profil/Minimata" element={<NannyMessage />} />

          {/*Profile History Parent*/}
          <Route path="/Goneis/Profil/Istoriko_Gonea" element = {<IstorikoGonewnArxikh />} />
          <Route path="/Goneis/Profil/Istoriko_Gonea/Rantevou_Prosexws" element = {<IstorikoGonewnRantevouProsexws />} />
          <Route path="/Goneis/Profil/Istoriko_Gonea/Rantevou_Prosexws/Epeksergasia" element={<ParentEditMeeting />} />
          <Route path="/Goneis/Profil/Istoriko_Gonea/Rantevou_Oloklhrwmena" element = {<IstorikoGonewnRantevouOloklhrwmena />} />
          <Route path="/Goneis/Profil/Istoriko_Gonea/Rantevou_Akyrwmena" element = {<IstorikoGonewnRantevouAkyrwmena />} />
          <Route path="/Goneis/Profil/Istoriko_Gonea/Aithseis_Endiaferontos_Se_Ekkremothta" element = {<IstorikoGonewnAithseisEndiaferontosEkkremothta/>} />
          <Route path="/Goneis/Profil/Istoriko_Gonea/Aithseis_Endiaferontos_Oloklhrwmenes" element = {<IstorikoGonewnAithseisEndiaferontosOloklhrwmenes />} />
          <Route path="/Goneis/Profil/Istoriko_Gonea/Idiwtika_Symfwnhtika_Se_ekkremothta" element = {<IstorikoGonewnIdiwtikaSymfwnhtikaEkkremothta />} />
          <Route path="/Goneis/Profil/Istoriko_Gonea/Idiwtika_Symfwnhtika_Oloklhrwmena" element = {<IstorikoGonewnIdiwtikaSymfwnhtikaOloklhrwmena/>} />
          <Route path="/Goneis/Profil/Istoriko_Gonea/Aithseis_Endiaferontos_Oloklhrwmenes/ypografh_idiwtikou_symfwnhtikou" element={<YpografhIdiwtikouSymfwnhtikou />} />
          <Route path="/Goneis/Profil/Istoriko_Gonea/Aithseis_Endiaferontos_Oloklhrwmenes/ypografh_idiwtikou_symfwnhtikou/epivevaiwsh" element={<YpografhIdiwtikouSymfwnhtikou2 />} />
          <Route path="/Goneis/Profil/Istoriko_Gonea/Plhrwmes" element={<PlhrwmhArxikh />} />
          <Route path="/Goneis/Profil/Istoriko_Gonea/Plhrwmes/Oloklhrwmenes" element = {<IstorikoGonewnPlhrwmes/>}/>
          <Route path="/Goneis/Profil/Istoriko_Gonea/Plhrwmes/Prosexws" element={<PlhrwmhForma />} />
          <Route path="/Goneis/Profil/Istoriko_Gonea/Plhrwmes/Prosexws_Voucher" element={<PlhrwmhVoucher />} />
          <Route path="/Goneis/Profil/Istoriko_Gonea/Plhrwmes/Prosexws_Voucher/Epivevaiwsh" element={<PlhrwmhEpivevaiwsh/>}/>
          <Route path="/Goneis/Profil/Istoriko_Gonea/Aksiologhseis" element = {<IstorikoGonewnAksiologhseis />} />
          <Route path="/Goneis/Profil/Istoriko_Gonea/Eidopoihseis" element = {<IstorikoGonewnEidopoihseis />} />

          {/*Profile History Nanny*/}
          <Route path="/Ntantades/Profil/Istoriko_Ntanta" element = {<IstorikoNtantasArxikh />} />
          <Route path="/Ntantades/Profil/Istoriko_Ntanta/Rantevou_Prosexws" element = {<IstorikoNtantasRantevouProsexws />} />
          <Route path="/Ntantades/Profil/Istoriko_Ntanta/Rantevou_Prosexws/Epivevaiwsh" element = {<IstorikoNtantasRantevouEpivevaiwsh />} />
          <Route path="/Ntantades/Profil/Istoriko_Ntanta/Rantevou_Oloklhrwmena" element = {<IstorikoNtantasRantevouOloklhrwmena />} />
          <Route path="/Ntantades/Profil/Istoriko_Ntanta/Rantevou_Akyrwmena" element = {<IstorikoNtantasRantevouAkyrwmena />} />
          <Route path="/Ntantades/Profil/Istoriko_Ntanta/Aithseis_Endiaferontos_Se_Ekkremothta" element = {<IstorikoNtantasAithseisEndiaferontosEkkremothta/>} />
          <Route path="/Ntantades/Profil/Istoriko_Ntanta/Aithseis_Endiaferontos_Se_Ekkremothta/Epivevaiwsh" element = {<IstorikoNtantasAithseisEndiaferontosEpivevaiwsh/>} />
          <Route path="/Ntantades/Profil/Istoriko_Ntanta/Aithseis_Endiaferontos_Oloklhrwmenes" element = {<IstorikoNtantasAithseisEndiaferontosOloklhrwmenes />} />
          <Route path="/Ntantades/Profil/Istoriko_Ntanta/Idiwtika_Symfwnhtika_Se_ekkremothta" element = {<IstorikoNtantasIdiwtikaSymfwnhtikaEkkremothta/>} />
          <Route path="/Ntantades/Profil/Istoriko_Ntanta/Idiwtika_Symfwnhtika_Se_ekkremothta/ypografh_idiwtikou_symfwnhtikouu" element = {<YpografhIdiwtikouSymfwnhtikou_Ntanta />} />
          <Route path="/Ntantades/Profil/Istoriko_Ntanta/Idiwtika_Symfwnhtika_Se_ekkremothta/ypografh_idiwtikou_symfwnhtikouu/epivevaiwsh" element={<YpografhIdiwtikouSymfwnhtikou2_Ntanta />} />
          <Route path="/Ntantades/Profil/Istoriko_Ntanta/Idiwtika_Symfwnhtika_Oloklhrwmena" element = {<IstorikoNtantasIdiwtikaSymfwnhtikaOloklhrwmena/>} />
          <Route path="/Ntantades/Profil/Istoriko_Ntanta/Plhrwmes_Prosexws" element={<IstorikoNtantasPlhrwmesProsexws />} />
          <Route path="/Ntantades/Profil/Istoriko_Ntanta/Plhrwmes_Prosexws/Apodoxh_Plhrwmhs" element = {<ApodoxhPlhrwmhs_Arxikh />} />
          <Route path="/Ntantades/Profil/Istoriko_Ntanta/Plhrwmes_Prosexws/Apodoxh_Plhrwmhs/Epivevaiwsh" element = {<ApodoxhPlhrwmhs_Epivevaiwsh />} />
          <Route path="/Ntantades/Profil/Istoriko_Ntanta/Plhrwmes_Oloklhrwmenes" element = {<IstorikoNtantasPlhrwmesOloklhrwmenes/>}/>
          <Route path="/Ntantades/Profil/Istoriko_Ntanta/Aksiologhseis" element = {<IstorikoNtantasAksiologhseis />} />
          <Route path="/Ntantades/Profil/Istoriko_Ntanta/Eidopoihseis" element = {<IstorikoNtantasEidopoihseis />} />

        </Routes>
      </div>
    </Router>
  );
}
