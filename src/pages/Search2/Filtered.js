import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Filtered.css";

/*Εδω πρεπει να βαλω δημους*/
const suggestions = [
    "Αθήνα",
    "Θεσσαλονίκη",
    "Πάτρα",
    "Ηράκλειο",
    "Λάρισα",
    "Βόλος",
    "Καλαμάτα",
    "Χαλάνδρι",
    "Αγία Παρασκευή",
    "Βριλήσσια",
    "Μελίσσια",
    "Φιλοθέη",
    "Χολαργός",
    "Καισαριανή",
    "Βύρωνας",
    "Παγκράτι",
    "Ζωγράφου",
    "Μεσσήνη",
    "Πανιπέρι",
    "Πεταλίδι",
    "Ηλιούπολη",
    "Αργυρούπολη",
    "Πειραιάς",
    "Νίκαια",
    "Κερατσίνι",
    "Γαλάτσι",
    "Ψυχικό",
    "Εύοσμος",
    "Καλαμαριά",
    "Ευκαρπία",
    "Ρίο",
    "Βραχνέικα",
    "Λάρισα",
    "Τούμπα",
    "Ηράκλειο"
];

function Filtered() {
    const navigate = useNavigate();
    const [locationRange, setSelectedArea] = useState(() => {
        const savedInput = localStorage.getItem("searchInput");
        return savedInput;
    });
    
    const [input, setInput] = useState("");
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [parentLocation, setParentLocation] = useState(false);
    const [nannyLocation, setNannyLocation] = useState(false);
    const [selectedDays, setSelectedDays] = useState([]);
    const [selectedTimes, setSelectedTimes] = useState([]);
    const [experienceRange, setExperienceRange] = useState([0, 30]);
    const [nannyageRange, setNannyAgeRange] = useState([18, 65]);
    const [rating, setRating] = useState(0);
    const [selectedLanguages, setSelectedLanguages] = useState([]);
    const [selectedDegree, setSelectedDegree] = useState("");
    const [extraServices, setExtraServices] = useState([]);
    const [selectedEmployment, setSelectedEmployment] = useState("");
    const extraServicesOptions = ["Νοηματική γλώσσα", "Κώδικας μπράιγ", "Ειδικές ανάγκες", "Δίπλωμα οδήγησης", "Μαγειρική", "Μελέτη Μαθημάτων", "Οικιακές Εργασίες"];
    const languageOptions = ["Αγγλικά", "Γαλλικά", "Γερμανικά", "Ισπανικά", "Ιταλικά"];
    const degreeOptions = ["Ασύγχρονο Πρόγραμμα Εκπαίδευσης", "Αγωγή και Φροντίδα", "Βρεφονηπιοκομία", "Μαιευτική", "Παιδαγωγικό", "Προσχολική Αγωγή"];

    const filtered_nannies = [
        { id: 1,
          name: "Ελένη Ανδρέου",
          location: "Χαλάνδρι",
          rating: 4.2,
          review_count: 2,
          img: "/nanny1.jpg",
          degree: "Ασύγχρονο Πρόγραμμα Εκπαίδευσης",
          degreeshort: "Ασύγχρονο Πρόγραμμα Εκπαίδευσης",
          age: 21,
          years_exp: 2,
          info: "Γεια σας! Είμαι η Ελένη, 21 ετών, και διαθέτω πιστοποιητικό από ασύγχρονο πρόγραμμα εκπαίδευσης για τη φροντίδα παιδιών. Είμαι υπεύθυνη, αξιόπιστη και με αγάπη για τα παιδιά, έτοιμη να προσφέρω τη φροντίδα που χρειάζονται με προσοχή και σεβασμό. Είμαι διαθέσιμη να φροντίσω τα παιδιά σας με επαγγελματισμό και ενθουσιασμό!",
          languages: ["Αγγλικά"],
          extraServices: ["Κώδικας μπράιγ", "Δίπλωμα οδήγησης", "Μαγειρική", "Μελέτη Μαθημάτων"],
          employmentType: "Μερική Απασχόληση",
          locationRange: ["Χαλάνδρι", "Αγία Παρασκευή", "Βριλήσσια", "Μελίσσια", "Φιλοθέη", "Χολαργός"],
          parentLocation: true,
          nannyLocation: false,
          availabilityDays: ["Δευ", "Τρι", "Τετ", "Πεμ", "Παρ"],
          availabilityTimes: ["Πρωί", "Νύχτα"],
          email: "eleni.andreou2003@gmail.com",
          call: "6908750439",
          review_text: [
            {
              reviewer: "Λάκης Λαλάκης",
              date: "2024-11-25",
              review: "Η Ελένη είναι εξαιρετική με τα παιδιά! Είναι στοργική, υπεύθυνη και πάντα βρίσκει δημιουργικούς τρόπους να τα απασχολεί. Την εμπιστευόμαστε απόλυτα."
            },
            {
              reviewer: "Γεωργία Γεωργίου",
              date: "2024-11-12",
              review: "Πολύ αξιόπιστη και συνεπής, η Ελένη έκανε τα παιδιά μας να τη λατρέψουν από την πρώτη στιγμή. Μας εντυπωσίασε η προσοχή και η φροντίδα της."
            }
          ]
        },
        { id: 2,
          name: "Νίκος Αθανασίου",
          location: "Καισαριανή",
          rating: 3.9,
          review_count: 3,
          img: "/nanny2.jpg",
          degree: "Τμήμα Αγωγής και Φροντίδας στην Πρώιμη Παιδική Ηλικία - ΠΑΔΑ",
          degreeshort: "Αγωγή και Φροντίδα",
          age: 24,
          years_exp: 3,
          info: "Ονομάζομαι Νίκος Αθανασίου, είμαι 24 ετών και έχω 3 χρόνια εμπειρίας στη φροντίδα παιδιών. Παρά το νεαρό της ηλικίας μου, έχω αναπτύξει τη γνώση και την υπευθυνότητα που απαιτεί αυτή η δουλειά. Αν και οι κριτικές μου είναι λίγες προς το παρόν, είμαι αφοσιωμένος στο να προσφέρω την καλύτερη φροντίδα και να δημιουργώ ένα ασφαλές και ευχάριστο περιβάλλον για τα παιδιά. Με βασικό μου στόχο την ευημερία τους, θα χαρώ να συνεργαστούμε και να σας δείξω την αφοσίωσή μου στη δουλειά μου.",
          languages: ["Αγγλικά", "Γερμανικά"],
          extraServices: ["Δίπλωμα οδήγησης", "Μελέτη Μαθημάτων"],
          locationRange: ["Καισαριανή", "Βύρωνας", "Παγκράτι", "Ζωγράφου"],
          parentLocation: true,
          nannyLocation: true,
          availabilityDays: ["Παρ", "Σαβ", "Κυρ"],
          availabilityTimes: ["Πρωί", "Μεσημέρι", "Απόγευμα"],
          email: "nick.athhh@gmail.com",
          call: "6906969439",
          review_text: [
            {
              reviewer: "Γιώργος Μάστορας",
              date: "2025-01-13",
              review: "Υπεύθυνος και συνεπής! Ευχαριστούμε Νίκο."
            },
            {
              reviewer: "Ελένη Γεωργίου",
              date: "2024-12-25",
              review: "Χαίρομαι πολύ που βρήκαμε τον Νίκο μέσω της εφαρμογής, μας βοήθησε πολύ!"
            },
            {
              reviewer: "Νίκος Παπαγεωργίου",
              date: "2024-11-16",
              review: "Το καλύτερο παιδί!!!!"
            }
          ]
        },
        { id: 3,
          name: "Αντώνης Γεωργακόπουλος",
          location: "Καλαμάτα",
          rating: 3.9,
          review_count: 4,
          img: "/nanny3.jpg",
          degree: "Βοηθός Βρεφονηπιοκόμων - ΙΕΚ",
          degreeshort: "Βρεφονηπιοκομία",
          age: 38,
          years_exp: 5,
          info: "Είμαι ο Αντώνης Γεωργακόπουλος, βοηθός βρεφονηπιοκόμων με 5 χρόνια εμπειρίας. Προσφέρω πλήρη απασχόληση σε οικογένειες στην Καλαμάτα και τις γύρω περιοχές. Εξειδικεύομαι στη φροντίδα παιδιών, τη μελέτη μαθημάτων, τη μαγειρική και τις οικιακές εργασίες. Μιλάω Αγγλικά και Ισπανικά, και διαθέτω δίπλωμα οδήγησης για να καλύπτω τις ανάγκες σας με ευελιξία.",
          languages: ["Αγγλικά", "Ισπανικά"],
          extraServices: ["Δίπλωμα οδήγησης", "Μαγειρική", "Μελέτη Μαθημάτων", "Οικιακές Εργασίες"],
          employmentType: "Πλήρης Απασχόληση",
          locationRange: ["Καλαμάτα", "Μεσσήνη", "Πανιπέρι", "Πεταλίδι"],
          parentLocation: true,
          nannyLocation: true,
          availabilityDays: ["Δευ", "Τρι", "Πεμ", "Παρ"],
          availabilityTimes: ["Πρωί", "Μεσημέρι"],
          email: "antonaras_georg1987@gmail.com",
          call: "6908420209",
          review_text: [
            {
              reviewer: "Μαρία Παυλάκου",
              date: "2023-07-18",
              review: "Εξαιρετικός ο Νίκος, είμαστε πολύ χαρούμενοι που συνεργαζόμαστε."
            },
            {
              reviewer: "Εύα Χέλμη",
              date: "2024-04-16",
              review: "Μακάρι να μπορούσα να βάλω 6/5 !"
            },
            {
              reviewer: "Γιάννης Αποστολόπουλος",
              date: "2025-01-11",
              review: "Δυστυχώς η συνεργασία μας δεν κράτησε πολύ για προσωπικούς λόγους αλλά χαρήκαμε για την βοήθεια"
            },
            {
              reviewer: "Αποστολία Καραγιάννη",
              date: "2022-08-22",
              review: "Ο Αντώνης τελικά δεν ήταν η κατάλληλη επιλογή για εμάς"
            }
          ]
        },
        { id: 4,
          name: "Χριστίνα Οικονόμου", 
          location: "Ηλιούπολη", 
          rating: 4.2, 
          review_count: 5, 
          img: "/nanny4.jpg", 
          degree: "Τμήμα Μαιευτικής - ΠΑΔΑ", 
          degreeshort: "Μαιευτική", 
          age: 28, 
          years_exp: 4,
          info: "Είμαι η Χριστίνα Οικονόμου, απόφοιτη του Τμήματος Μαιευτικής του ΠΑΔΑ, και ζω στην Ηλιούπολη. Με εμπνέει η φροντίδα των παιδιών και πιστεύω ότι κάθε παιδί αξίζει ένα ζεστό και ασφαλές περιβάλλον για να αναπτυχθεί. Οι εξαιρετικές κριτικές από γονείς που με εμπιστεύτηκαν με ενθαρρύνουν να δίνω πάντα τον καλύτερό μου εαυτό. Αν χρειάζεστε μια υπεύθυνη και έμπειρη νταντά, θα χαρώ πολύ να συνεργαστούμε!",
          languages: ["Αγγλικά", "Γαλλικά"], 
          extraServices: ["Νοηματική γλώσσα"], 
          employmentType: "Πλήρης Απασχόληση", 
          locationRange: ["Ηλιούπολη", "Αργυρούπολη", "Βύρωνας"],
          parentLocation: false,
          nannyLocation: true,
          availabilityDays: ["Δευ", "Τρι", "Σαβ", "Κυρ"],
          availabilityTimes: ["Πρωί", "Μεσημέρι", "Απόγευμα"],
          email: "xristinakioik1@gmail.com",
          call: "6908755042",
          review_text: [
            {
              reviewer: "Νίκος Φούντας",
              date: "2025-01-15",
              review: "Η Χριστίνα είναι εξαιρετική στη δουλειά της! Τα παιδιά μου την αγάπησαν από την πρώτη στιγμή. Τη συστήνω ανεπιφύλακτα!"
            },
            {
              reviewer: "Βασίλης Παπαδόπουλος",
              date: "2023-06-16",
              review: "Δεν ήταν τελικά αυτό που ψάχναμε, αλλά η Χριστίνα είναι πολύ ευγενική και πρόθυμη."
            },
            {
              reviewer: "Γιάννης Θειόπουλος",
              date: "2022-05-06",
              review: "Η Χριστίνα μας βοήθησε σε μια δύσκολη περίοδο. Επαγγελματίας και με αγάπη για τα παιδιά!"
            },
            {
              reviewer: "Δανάη Καλαντζή",
              date: "2024-03-10",
              review: "Ευχαριστουμε Χριστίνα <333"
            },
            {
              reviewer: "Μυρτώ Συνολάκη",
              date: "2024-07-30",
              review: "Εξαιρετική η Χριστίνα, την συστήνουμε ανεπιφύλακτα "
            },
          ]
        },
        { id: 5, 
          name: "Δημήτρης Σπυρόπουλος", 
          location: "Αθήνα", 
          rating: 4.8, 
          review_count: 34, 
          img: "/nanny5.jpg",
          degree: "Ασύγχρονο Πρόγραμμα Εκπαίδευσης",
          degreeshort: "Ασύγχρονο Πρόγραμμα Εκπαίδευσης",
          age: 58,
          years_exp: 20,
          info: "Είμαι ο Δημήτρης Σπυρόπουλος, 58 ετών, με περισσότερα από 20 χρόνια εμπειρίας στη φροντίδα παιδιών. Έχω ολοκληρώσει το Ασύγχρονο Πρόγραμμα Εκπαίδευσης και πιστεύω στην αξία της υπευθυνότητας και της συνέπειας στη δουλειά μου. Με βαθμολογία 4.8/5 από 32 αξιολογήσεις γονέων, νιώθω περήφανος που οι οικογένειες με εμπιστεύονται. Με αγάπη για τα παιδιά και στόχο τη δημιουργία ενός ασφαλούς και υποστηρικτικού περιβάλλοντος, θα χαρώ να σας βοηθήσω με τη φροντίδα των μικρών σας.",
          languages: [], 
          extraServices: ["Ειδικές ανάγκες", "Δίπλωμα οδήγησης"], 
          employmentType: "Πλήρης Απασχόληση", 
          locationRange: ["Αθήνα"],
          parentLocation: true,
          nannyLocation: false,
          availabilityDays: ["Παρ", "Σαβ", "Κυρ"],
          availabilityTimes: ["Πρωί", "Μεσημέρι", "Απόγευμα"],
          email: "dimitris.spiropoulos@yahoo.gr",
          call: "6901237654",
          review_text: [
            {
              reviewer: "Ελένη Σταματίου",
              date: "2023-09-10",
              review: "Ο Δημήτρης ήταν ο άνθρωπος που χρειαζόμασταν. Έχει έναν μοναδικό τρόπο να επικοινωνεί με τα παιδιά, ακόμα και με ιδιαίτερες ανάγκες"
            },
            {
              reviewer: "Μάριος Δεληγιάννης",
              date: "2024-03-15",
              review: "Η εμπειρία και η ηρεμία του Δημήτρη κάνουν τη διαφορά. Τα παιδιά μας τον λατρεύουν, και εμείς είμαστε ήσυχοι ότι βρίσκονται σε καλά χέρια."
            },
            {
              reviewer: "Κωνσταντίνα Αλεξίου",
              date: "2025-01-06",
              review: "Δεν μπορούσαμε να ζητήσουμε καλύτερη φροντίδα για το παιδί μας. Υπεύθυνος, τρυφερός και πάντα στην ώρα του."
            },
            {
              reviewer: "Άννα Παπαδοπούλου",
              date: "2023-11-05",
              review: "Ο Δημήτρης είναι πραγματικά καταπληκτικός με τα παιδιά. Η εμπειρία του φαίνεται σε κάθε του κίνηση. Τον προτείνω ανεπιφύλακτα!"
            },
          ]
        },
        { id: 6, 
          name: "Σοφία Χατζηγεωργίου", 
          location: "Πειραιάς", 
          rating: 4.6, 
          review_count: 27, 
          img: "/nanny6.jpg", 
          degree: "Τμήμα Προσχολικής Αγωγής - ΠΑΔΑ", 
          degreeshort: "Προσχολική Αγωγή", 
          age: 35, 
          years_exp: 8, 
          info: "Υπεύθυνη και έμπειρη, προσφέρω ασφαλή και χαρούμενη απασχόληση για τα παιδιά σας.",
          languages: ["Αγγλικά"], 
          extraServices: ["Κώδικας μπράιγ", "Ειδικές ανάγκες", "Δίπλωμα οδήγησης", "Μαγειρική"], 
          employmentType: "Μερική Απασχόληση", 
          locationRange: ["Πειραιάς", "Νίκαια", "Κερατσίνι"],
          parentLocation: true,
          nannyLocation: true,
          availabilityDays: ["Δευ", "Τρι", "Τετ"],
          availabilityTimes: ["Πρωί", "Μεσημέρι", "Απόγευμα"],
          email: "xatzz.sophia@outlook.com",
          call: "6944554333",
          review_text: [
            {
              reviewer: "Παναγιώτης Καραμάνος",
              date: "2024-05-08",
              review: "Η εμπειρία και η ηρεμία της Σοφίας φαίνονται από την πρώτη στιγμή. Ευχαριστούμε για τη βοήθειά σας!"
            },
            {
              reviewer: "Χρήστος Νικολαΐδης",
              date: "2023-09-15",
              review: "Μια εξαιρετική νταντά που κατανοεί τις ανάγκες των παιδιών και πάντα είναι πρόθυμη να βοηθήσει."
            },
          ]
        },
        { id: 7,
          name: "Κατερίνα Λαμπροπούλου", 
          location: "Γαλάτσι", 
          rating: 4, 
          review_count: 1, 
          img: "/nanny7.jpg",
          degree: "Σχολής Νηπιοβρεφοκόμων του Κέντρου Βρεφών «Η ΜΗΤΕΡΑ»",
          degreeshort: "Βρεφονηπιοκομία",
          age: 21,
          years_exp: 1,
          info: "Είμαι έμπειρη νταντά με σπουδές στη βρεφονηπιοκομία. Λατρεύω να δουλεύω με παιδιά και έχω μία φιλική και στοργική προσέγγιση στη φροντίδα τους. Είμαι διαθέσιμη για βοήθεια με τα μαθήματα καθώς και για ελαφριές οικιακές εργασίες. Μιλάω άπταιστα Αγγλικά, Γαλλικά, Γερμανικά και Ισπανικά.",
          languages: ["Αγγλικά", "Γαλλικά", "Γερμανικά", "Ισπανικά"], 
          extraServices: ["Μελέτη Μαθημάτων", "Οικιακές Εργασίες"], 
          employmentType: "Μερική Απασχόληση", 
          locationRange: ["Γαλάτσι", "Ψυχικό", "Φιλοθέη"],
          parentLocation: false,
          nannyLocation: true,
          availabilityDays: ["Παρ", "Σαβ", "Κυρ"],
          availabilityTimes: ["Πρωί", "Μεσημέρι"],
          email: "katkatxlampr@gmail.com",
          call: "6947030123",
          review_text: [
            {
              reviewer: "Θεοδωρής Ιωάννου",
              date: "2022-04-29",
              review: "Η πιο γλυκιά νταντά!"
            },
          ]
        },
        { id: 8, 
          name: "Παναγιώτης Μιχαηλίδης", 
          location: "Θεσσαλονίκη", 
          rating: 4.2, 
          review_count: 1, 
          img: "/nanny8.jpg", 
          degree: "Ασύγχρονο Πρόγραμμα Εκπαίδευσης", 
          degreeshort: "Ασύγχρονο Πρόγραμμα Εκπαίδευσης", 
          age: 26, 
          years_exp: 2, 
          info: "Είμαι νέος επαγγελματίας με εμπειρία στη φροντίδα και δημιουργική απασχόληση παιδιών. Έχω πτυχίο στα παιδαγωγικά και λατρεύω να διδάσκω και να εμπνέω τα παιδιά. Προσφέρω επιπλέον υπηρεσίες, όπως μαγειρική και βοήθεια με τα μαθήματα, και διαθέτω δίπλωμα οδήγησης για ευκολία στις μετακινήσεις.",
          extraServices: ["Δίπλωμα οδήγησης", "Μαγειρική", "Μελέτη Μαθημάτων", "Οικιακές Εργασίες"], 
          employmentType: "Μερική Απασχόληση", 
          locationRange: ["Θεσσαλονίκη", "Εύοσμος"],
          parentLocation: false,
          nannyLocation: true,
          availabilityDays: ["Πεμ", "Παρ", "Σαβ", "Κυρ"],
          availabilityTimes: ["Απόγευμα", "Νύχτα"],
          email: "panagiotis.mixaa98.com",
          call: "6901231231",
          review_text: [
            {
              reviewer: "Βασιλική Χατζή",
              date: "2023-06-01",
              review: "Ο Παναγιώτης χρειάζεται ακόμα εμπειρία αλλά είναι πολύ ευγενικός"
            },
          ]
        },
        {
          id: 9,
          name: "Αλέξανδρος Παπαδόπουλος",
          location: "Θεσσαλονίκη",
          rating: 4.5,
          review_count: 12,
          img: "/nanny9.jpg",
          degree: "Ασύγχρονο Πρόγραμμα Εκπαίδευσης",
          degreeshort: "Ασύγχρονο Πρόγραμμα Εκπαίδευσης",
          age: 29,
          years_exp: 5,
          info: "Είμαι ο Αλέξανδρος Παπαδόπουλος, με 5 χρόνια εμπειρίας στη φροντίδα παιδιών και σπουδές στην Ψυχολογία. Πιστεύω στη σημασία της σωστής καθοδήγησης και του παιχνιδιού για την ανάπτυξη κάθε παιδιού.",
          languages: ["Αγγλικά", "Ιταλικά"],
          extraServices: ["Μαγειρική", "Μελέτη Μαθημάτων"],
          employmentType: "Πλήρης Απασχόληση",
          locationRange: ["Θεσσαλονίκη", "Καλαμαριά", "Ευκαρπία"],
          parentLocation: true,
          nannyLocation: true,
          availabilityDays: ["Δευ", "Τρι", "Τετ", "Πεμ", "Παρ"],
          availabilityTimes: ["Πρωί", "Απόγευμα"],
          email: "alex.papadop@gmail.com",
          call: "6934567890",
          review_text: [
            {
              reviewer: "Ελένη Μαυρίδου",
              date: "2024-09-15",
              review: "Ο Αλέξανδρος είναι εξαιρετικός με τα παιδιά μας. Φαίνεται ότι αγαπά τη δουλειά του και το δείχνει!"
            },
            {
              reviewer: "Μιχάλης Καραγιάννης",
              date: "2024-05-12",
              review: "Με βοήθησε πολύ με τη μελέτη του παιδιού μου. Έχει τρομερή υπομονή και κατανόηση."
            }
          ]
        },
        {
          id: 10,
          name: "Ιωάννα Κωνσταντίνου",
          location: "Πάτρα",
          rating: 4.7,
          review_count: 18,
          img: "/nanny10.jpg",
          degree: "Παιδαγωγικό Τμήμα Δημοτικής Εκπαίδευσης - Πανεπιστήμιο Πατρών",
          degreeshort: "Παιδαγωγικό",
          age: 33,
          years_exp: 7,
          info: "Είμαι η Ιωάννα Κωνσταντίνου, απόφοιτη Παιδαγωγικής, με 7 χρόνια εμπειρίας στη φροντίδα και εκπαίδευση παιδιών. Πιστεύω στη δημιουργική απασχόληση και την ενίσχυση της αυτοπεποίθησης των παιδιών μέσω παιχνιδιού και μάθησης.",
          languages: ["Αγγλικά", "Ιταλικά"],
          extraServices: ["Μαγειρική", "Μελέτη Μαθημάτων", "Δημιουργικές Δραστηριότητες"],
          employmentType: "Μερική Απασχόληση",
          locationRange: ["Πάτρα", "Ρίο", "Βραχνέικα"],
          parentLocation: true,
          nannyLocation: false,
          availabilityDays: ["Δευ", "Τρι", "Πεμ", "Παρ", "Σαβ"],
          availabilityTimes: ["Πρωί", "Μεσημέρι"],
          email: "ioanna.konst@gmail.com",
          call: "6976543210",
          review_text: [
            {
              reviewer: "Αγγελική Δελατόλα",
              date: "2024-10-10",
              review: "Η Ιωάννα είναι πάντα συνεπής και δημιουργική. Τα παιδιά μας την περιμένουν με ανυπομονησία κάθε φορά."
            },
            {
              reviewer: "Δημήτρης Σταυρίδης",
              date: "2023-12-05",
              review: "Πολύ ευγενική και επαγγελματίας. Η βοήθειά της ήταν ανεκτίμητη."
            }
          ]
        },
        {
          id: 11,
          name: "Νεκτάριος Τσιμπουράκης-Παυλάκος",
          location: "Λάρισα",
          rating: 3.7,
          review_count: 18,
          img: "/nanny11.jpg",
          degree: "Τμήμα Προσχολικής Αγωγής - ΠΑΔΑ",
          degreeshort: "Προσχολική Αγωγή",
          age: 30,
          years_exp: 4,
          info: "Είμαι ο Νεκτάριος Τσιμπουράκης-Παυλάκος, απόφοιτος του Τμήματος Προσχολικής Αγωγής του ΠΑΔΑ. Με 4 χρόνια εμπειρίας στη φροντίδα και δημιουργική απασχόληση παιδιών, πιστεύω στη σημασία της ενσυναίσθησης και της επικοινωνίας. Γνωρίζω Αγγλικά και νοηματική γλώσσα, και διαθέτω δίπλωμα οδήγησης για την καλύτερη εξυπηρέτησή σας.",
          languages: ["Αγγλικά"],
          extraServices: ["Νοηματική γλώσσα", "Δίπλωμα οδήγησης", "Μελέτη Μαθημάτων"],
          employmentType: "Πλήρης Απασχόληση",
          locationRange: ["Λάρισα"],
          parentLocation: true,
          nannyLocation: true,
          availabilityDays: ["Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ", "Κυρ"],
          availabilityTimes: ["Μεσημέρι", "Νύχτα"],
          email: "nektarios.pavlakos@gmail.com",
          call: "6908750439",
          review_text: [
            {
              reviewer: "Ευτύχης Δρακάκης",
              date: "2024-12-28",
              review: "Να σαι καλά ρε Νεκτάριε, είσαι τρομερός!"
            },
            {
              reviewer: "Βύρωνας Γεωργίτσης",
              date: "2024-07-24",
              review: "Φανταστικό παιδί!"
            }
          ]
        },
        {
          id: 12,
          name: "Μαρία-Μαλαματή Παπαδοπούλου",
          location: "Θεσσαλονίκη",
          rating: 3.8,
          review_count: 7,
          img: "/nanny12.jpg",
          degree: "Βοηθός Βρεφονηπιοκόμων - ΙΕΚ",
          degreeshort: "Βρεφονηπιοκομία",
          age: 28,
          years_exp: 6,
          info: "Είμαι η Μαρία, με 6 χρόνια εμπειρίας στη φροντίδα και δημιουργική απασχόληση παιδιών. Εξειδικεύομαι σε υπηρεσίες όπως η εκπαίδευση μέσω παιχνιδιού, η μελέτη μαθημάτων, καθώς και η μαγειρική για τα παιδιά. Μιλάω Αγγλικά και Γερμανικά, ενώ διαθέτω δεξιότητες στον κώδικα μπράιγ για την υποστήριξη παιδιών με ειδικές ανάγκες. Είμαι διαθέσιμη για μερική απασχόληση στη Θεσσαλονίκη και την Τούμπα.",
          languages: ["Αγγλικά", "Γερμανικά"],
          extraServices: ["Κώδικας μπράιγ", "Δίπλωμα οδήγησης", "Μαγειρική", "Μελέτη Μαθημάτων"],
          employmentType: "Μερική Απασχόληση",
          locationRange: ["Θεσσαλονίκη", "Τούμπα"],
          parentLocation: true,
          nannyLocation: true,
          availabilityDays: ["Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ", "Κυρ"],
          availabilityTimes: ["Πρωί", "Απόγευμα"],
          email: "ppapadopoulou.alani@gmail.com",
          call: "6987016699",
          review_text: [
            {
              reviewer: "Φωτεινή Κυριαλάνη",
              date: "2024-10-21",
              review: "Η Μαλαματή είναι εξαιρετική νταντά και φίλη!"
            },
            {
              reviewer: "Στέλιος Συνολάκης",
              date: "2025-01-07",
              review: "Η πιο όμορφη νταντά. Ευχαριστούμε πολύ Μαρία."
            }
          ]
        },
        {
          id: 13,
          name: "Νίκος Βασιλάκης",
          location: "Ηράκλειο",
          rating: 3.5,
          review_count: 7,
          img: "/nanny13.jpg",
          degree: "Τμήμα Αγωγής και Φροντίδας στην Πρώιμη Παιδική Ηλικία - ΠΑΔΑ",
          degreeshort: "Αγωγή και Φροντίδα",
          age: 35,
          years_exp: 8,
          info: "Είμαι ο Νίκος Βασιλάκης, με 8 χρόνια εμπειρίας στη φροντίδα παιδιών και εξειδίκευση στην αγωγή και φροντίδα της πρώιμης παιδικής ηλικίας. Μιλάω Αγγλικά και Ισπανικά, και μπορώ να υποστηρίξω παιδιά με ειδικές ανάγκες. Προσφέρω μερική απασχόληση στο Ηράκλειο, με ευελιξία για απογευματινή και νυχτερινή φροντίδα. Παρέχω επίσης βοήθεια στη μελέτη μαθημάτων και μαγειρική.",
          languages: ["Αγγλικά", "Ισπανικά"],
          extraServices: ["Ειδικές ανάγκες", "Δίπλωμα οδήγησης", "Μαγειρική", "Μελέτη Μαθημάτων"],
          employmentType: "Μερική Απασχόληση",
          locationRange: ["Ηράκλειο"],
          parentLocation: true,
          nannyLocation: true,
          availabilityDays: ["Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ", "Κυρ"],
          availabilityTimes: ["Απόγευμα", "Νύχτα"],
          email: "nickva.tsilimember@gmail.com",
          call: "6989794122",
          review_text: [
            {
              reviewer: "Νίκη Ανδρέου",
              date: "2023-11-15",
              review: "Ο Νίκος είναι ο καλύτερος <3"
            },
            {
              reviewer: "Γιώργος Αντωνιάδης",
              date: "2024-03-28",
              review: "Εξαιρετικό άτομο αλλά έπρεπε να διακόψουμε την συνεργασία μας"
            }
          ]
        }
    ];

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInput(value);

        if (value) {
            const filtered = suggestions.filter((suggestion) =>
                suggestion.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredSuggestions(filtered);
        } else {
            setFilteredSuggestions([]);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setInput(suggestion);
        setSelectedArea(suggestion);
        setFilteredSuggestions([]);
    };

    const clearAllFilters = () => {
        setSelectedLanguages([]);
        setSelectedDegree("");
        setExtraServices([]);
        setRating(0);
        setSelectedEmployment("");
        setInput("");
        setSelectedArea("");
        setFilteredSuggestions([]);
        setParentLocation(false);
        setNannyLocation(false);
        setExperienceRange([0, 30]);
        setNannyAgeRange([18, 65]);
        setSelectedDays([]);
        setSelectedTimes([]);
    };

    const handleParentLocationToggle = () => {
        setParentLocation(!parentLocation);
    };

    const handleNannyLocationToggle = () => {
        setNannyLocation(!nannyLocation);
    };

    const handleDayClick = (day) => {
        setSelectedDays((prev) =>
            prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
        );
    };

    const handleTimeClick = (time) => {
        setSelectedTimes((prev) =>
            prev.includes(time) ? prev.filter((t) => t !== time) : [...prev, time]
        );
    };


    const handleExperienceChange = (e) => {
        const newRange = [...experienceRange];
        const { name, value } = e.target;
        
        // Update either min or max range based on which slider is moved
        if (name === "min") {
            newRange[0] = Math.min(parseInt(value), experienceRange[1]);
        } else {
            newRange[1] = Math.max(parseInt(value), experienceRange[0]);
        }

        setExperienceRange(newRange);
    };

    const handleNannyAgeChange = (e) => {
        const newRange = [...nannyageRange];
        const { name, value } = e.target;
        
        // Update either min or max range based on which slider is moved
        if (name === "min") {
            newRange[0] = Math.min(parseInt(value), nannyageRange[1]);
        } else {
            newRange[1] = Math.max(parseInt(value), nannyageRange[0]);
        }

        setNannyAgeRange(newRange);
    };

    const handleRatingChange = (e) => {
        setRating(Number(e.target.value));
    };

    const handleLanguageChange = (e) => {
        const { value } = e.target;
        setSelectedLanguages((prev) =>
            Array.isArray(prev)
                ? prev.includes(value)
                    ? prev.filter((lang) => lang !== value)
                    : [...prev, value]
                : [value] // Fallback in case prev is not an array
        );
    };

    const handleDegreeChange = (e) => {
        setSelectedDegree(e.target.value);
    };

    const handleExtraServicesChange = (service) => {
        setExtraServices((prev) =>
            prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
        );
    };

    const removeFilter = (filterType, value) => {
        if (filterType === "language") {
            setSelectedLanguages((prev) => prev.filter((lang) => lang !== value));
        } else if (filterType === "degree") {
            setSelectedDegree("");
        } else if (filterType === "extraService") {
            setExtraServices((prev) => prev.filter((service) => service !== value));
        } else if (filterType === "rating") {
            setRating(0);
        } else if (filterType === "employment") {
            setSelectedEmployment("");
        } else if (filterType === "locationRange") {
            setInput("");
            setSelectedArea("");
            setFilteredSuggestions([]);
        } else if (filterType === "parentLocation") {
            setParentLocation(false);
        } else if (filterType === "nannyLocation") {
            setNannyLocation(false);
        } else if (filterType === "experience") {
            setExperienceRange([0,30]);
        } else if (filterType === "nannyAge") {
            setNannyAgeRange([18, 65]);
        } else if (filterType === "day") {
            setSelectedDays((prev) => prev.filter((day) => day !== value));
        } else if (filterType === "time") {
            setSelectedTimes((prev) => prev.filter((time) => time !== value));
        } 
    };

    const appliedFilters = [
        ...(locationRange ? [{ type: "locationRange", value: locationRange }] : []),
        ...(parentLocation ? [{ type: "parentLocation", value: "Χώρος Γονέα" }] : []),
        ...(nannyLocation ? [{ type: "nannyLocation", value: "Χώρος Νταντάς" }] : []),
        ...selectedLanguages.map((lang) => ({ type: "language", value: lang })),
        ...(selectedDegree ? [{ type: "degree", value: selectedDegree }] : []),
        ...extraServices.map((service) => ({ type: "extraService", value: service })),
        ...(rating ? [{ type: "rating", value: `Rating: ${rating}+` }] : []),
        ...(selectedEmployment ? [{ type: "employment", value: selectedEmployment === "option1" ? "Πλήρης Απασχόληση" : "Μερική Απασχόληση" }] : []),
        ...(experienceRange[0] !== 0 || experienceRange[1] !== 30 ? [{ type: "experience", value: `${experienceRange[0]} - ${experienceRange[1]} χρόνια εμπειρίας` }] : []),
        ...(nannyageRange[0] !== 18 || nannyageRange[1] !== 65 ? [{ type: "nannyAge", value: `${nannyageRange[0]} - ${nannyageRange[1]} ηλικία νταντάς` }] : []),
        ...selectedDays.map((day) => ({ type: "day", value: day })),
        ...selectedTimes.map((time) => ({ type: "time", value: time }))
    ];

    const filteredResults = filtered_nannies.filter(
        (nanny) =>
            (!parentLocation || nanny.parentLocation === true) &&
            (!nannyLocation || nanny.nannyLocation === true) &&
            (!locationRange || nanny.locationRange.includes(locationRange)) &&
            nanny.years_exp >= experienceRange[0] &&
            nanny.years_exp <= experienceRange[1] &&
            nanny.age >= nannyageRange[0] &&
            nanny.age <= nannyageRange[1] &&
            nanny.rating >= rating &&
            (selectedLanguages.length === 0 || 
             selectedLanguages.every((lang) => nanny.languages.includes(lang))) &&
            (selectedDegree ? nanny.degreeshort?.includes(selectedDegree) : true) &&
            extraServices.every((service) => nanny.extraServices?.includes(service)) &&
            (selectedEmployment ? nanny.employmentType === selectedEmployment : true) &&
            (selectedDays.length === 0 || selectedDays.every((day) => nanny.availabilityDays?.includes(day))) &&
            (selectedTimes.length === 0 || selectedTimes.every((time) => nanny.availabilityTimes?.includes(time)))
    );

    const handleNannyClick = (id) => {
        localStorage.setItem("nannyId", id);
        navigate(`/Goneis/Aggelies/Profile`);
    };





    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Calculate the total number of pages
    const totalPages = Math.ceil(filteredResults.length / itemsPerPage);

    // Get the nannies to display on the current page
    const currentNannies = filteredResults.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="filtered-container">
            <div className="filters-section">
            <h3>Εφαρμοσμένα Φίλτρα</h3>
                <div className="applied-filters">
                    {appliedFilters.map((filter, index) => (
                        <span
                            key={index}
                            className="applied-filter-tag"
                            onClick={() => removeFilter(filter.type, filter.value)}
                        >
                            {filter.value} ✕
                        </span>
                    ))}
                    {appliedFilters.length > 0 && (
                        <button
                            className="remove-all-filters-button"
                            onClick={clearAllFilters}
                        >
                            Αφαίρεση Φίλτρων
                        </button>
                    )}
                </div>

                <h3>Φίλτρα</h3>

                {/*Filter 1*/}
                <div className="filter-group">
                    <label className="filter-group-label">Περιοχή</label>
                    <div className="input-container">
                        <input
                            type="text"
                            className="query-input-search"
                            placeholder="Περιοχή..."
                            value={input}
                            onChange={handleInputChange}
                        />
                    </div>

                    {filteredSuggestions.length > 0 && (
                        <ul className="query-suggestions-search">
                            {filteredSuggestions.map((suggestion, index) => (
                                <li
                                    key={index}
                                    className="query-suggestion-item-search"
                                    onClick={() => handleSuggestionClick(suggestion)}
                                >
                                    {suggestion}
                                </li>
                            ))}
                        </ul>
                    )}

                    <div className="checkbox-container">
                        <input
                            type="checkbox"
                            checked={parentLocation}
                            onChange={handleParentLocationToggle}
                        />
                        <label className="filter-group-label">Στο χώρο του Γονέα</label>
                    </div>

                    <div className="checkbox-container">
                        <input
                            type="checkbox"
                            checked={nannyLocation}
                            onChange={handleNannyLocationToggle}
                        />
                        <label className="filter-group-label">Στο χώρο της Νταντάς</label>
                    </div>
                </div>

                {/* Filter 2: Availability */}
                <div className="filter-group">
                    <label className="filter-group-label">Διαθεσιμότητα:</label>
                    <div className="availability-container">
                        {/* Days of the week */}
                        <div className="availability-days">
                            {["Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ", "Κυρ"].map((day, index) => (
                                <div
                                    key={index}
                                    className={`day selectable ${selectedDays.includes(day) ? "selected" : ""}`}
                                    onClick={() => handleDayClick(day)}
                                >
                                    {day}
                                </div>
                            ))}
                        </div>

                        {/* Time of day */}
                        <div className="availability-times">
                            {[
                                { label: "Πρωί", icon: "/morning.png" },
                                { label: "Μεσημέρι", icon: "/day.png" },
                                { label: "Απόγευμα", icon: "/afternoon.png" },
                                { label: "Νύχτα", icon: "/night.png" },
                            ].map((time, index) => (
                                <div
                                    key={index}
                                    className={`time selectable ${selectedTimes.includes(time.label) ? "selected" : ""}`}
                                    onClick={() => handleTimeClick(time.label)}
                                >
                                    <img src={time.icon} alt={time.label} className="time-icon" />
                                    <span>{time.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/*Filter 3: Radio Buttons Filter*/}
                <div className="filter-group">
                    <label className="filter-group-label">Τύπος Απασχόλησης Νταντάς:</label>
                    <div>
                        <input
                            type="radio"
                            id="Πλήρης Απασχόληση"
                            name="featureOption"
                            value="Πλήρης Απασχόληση"
                            checked={selectedEmployment === "Πλήρης Απασχόληση"}
                            onChange={(e) => setSelectedEmployment(e.target.value)}
                        />
                        <label  className="filter-group-label" htmlFor="Πλήρης Απασχόληση">Πλήρης Απασχόληση</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            id="Μερική Απασχόληση"
                            name="featureOption"
                            value="Μερική Απασχόληση"
                            checked={selectedEmployment === "Μερική Απασχόληση"}
                            onChange={(e) => setSelectedEmployment(e.target.value)}
                        />
                        <label  className="filter-group-label" htmlFor="Μερική Απασχόληση">Μερική Απασχόληση</label>
                    </div>
                </div>

                {/*Filter 4*/}
                <div className="filter-group">
                    <label className="filter-group-label" >Χρόνια Εμπειρίας:<br/>{experienceRange[0]} - {experienceRange[1]}</label>
                    <div className="experience-slider">
                        <div
                        className="slider-track"
                        style={{ background: "#ccc" }}
                        ></div>
                        <div
                        className="slider-active-track"
                        style={{
                            left: `${(experienceRange[0] / 30) * 100}%`,
                            right: `${100 - (experienceRange[1] / 30) * 100}%`,
                        }}
                        ></div>
                        <input
                        type="range"
                        name="min"
                        min="0"
                        max="30"
                        value={experienceRange[0]}
                        onChange={handleExperienceChange}
                        className="slider"
                        />
                        <input
                        type="range"
                        name="max"
                        min="0"
                        max="30"
                        value={experienceRange[1]}
                        onChange={handleExperienceChange}
                        className="slider"
                        />
                    </div>
                </div>

                {/*Filter 5*/}
                <div className="filter-group">
                    <label className="filter-group-label">Ηλικία Νταντάς:<br/>{nannyageRange[0]} - {nannyageRange[1]}</label>
                    <div className="experience-slider">
                        <div
                        className="slider-track"
                        style={{ background: "#ccc" }}
                        ></div>
                        <div
                        className="slider-active-track"
                        style={{
                            left: `${((nannyageRange[0] - 18) / (65 - 18)) * 100}%`,
                            width: `${((nannyageRange[1] - nannyageRange[0]) / (65 - 18)) * 100}%`
                        }}
                        ></div>
                        <input
                        type="range"
                        name="min"
                        min="18"
                        max="65"
                        value={nannyageRange[0]}
                        onChange={handleNannyAgeChange}
                        className="slider"
                        />
                        <input
                        type="range"
                        name="max"
                        min="18"
                        max="65"
                        value={nannyageRange[1]}
                        onChange={handleNannyAgeChange}
                        className="slider"
                        />
                    </div>
                </div>

                {/*Filter 7*/}
                <div className="filter-group">
                    <label className="filter-group-label">Αξιολόγηση Νταντάς:<br/>{rating}+</label>
                    <div className="experience-slider">
                        <div
                        className="slider-track"
                        style={{ background: "#ccc" }}
                        ></div>
                        <div
                        className="slider-active-track"
                        style={{
                            left: `0%`,
                            width: `${(rating / 5) * 100}%`,
                            background: "#007bff"
                        }}
                        ></div>
                        <input
                        type="range"
                        min="0"
                        max="5"
                        step="0.1"
                        value={rating}
                        onChange={handleRatingChange}
                        className="slider"
                        />
                    </div>
                </div>

                {/*Filter 8*/}
                <div className="filter-group">
                    <label className="filter-group-label">Τίτλος Σπουδών:</label>
                    <select value={selectedDegree} onChange={handleDegreeChange} className="degree">
                        <option value="">Όλα</option>
                        {degreeOptions.map((deg) => (
                            <option key={deg} value={deg}>
                                {deg}
                            </option>
                        ))}
                    </select>
                </div>

                {/*Filter 9*/}
                <div className="filter-group">
                    <label className="filter-group-label">Επιπλέον Γλώσσες:</label>
                    <select value={selectedLanguages} onChange={handleLanguageChange} className="languages">
                        <option value="">Όλες</option>
                        {languageOptions.map((lang) => (
                            <option key={lang} value={lang}>
                                {lang}
                            </option>
                        ))}
                    </select>
                </div>

                {/*Filter 10*/}
                <div className="filter-group">
                    <label className="filter-group-label">Επιπλέον Παροχές:</label>
                    {extraServicesOptions.map((service) => (
                        <div key={service}>
                            <input
                                type="checkbox"
                                checked={extraServices.includes(service)}
                                onChange={() => handleExtraServicesChange(service)}
                                className="extraServices"
                            />
                            <label className="filter-group-label">{service}</label>
                        </div>
                    ))}
                </div>

            </div>

            {/* Profiles */}
            <div className="profiles-section">
                <div className="filtered-grid">
                    {currentNannies.map((nanny) => (
                        <div key={nanny.id} className="filtered-card" onClick={() => handleNannyClick(nanny.id)}>
                            <img className="avatar" src={nanny.img} alt={nanny.name} />
                            <div className="card-content">
                                <h3>{nanny.name}</h3>
                                <div className="rating">
                                    <span>⭐ {nanny.rating.toFixed(1)}</span>
                                    <span className="stars">({nanny.review_count})</span>
                                </div>
                                <p className="degree">🎓 {nanny.degree}</p>
                                <p className="info">{nanny.info}</p>
                                <div className="details">
                                    <span>{nanny.location}</span>
                                    <span>{nanny.age} ετών</span>
                                    <span>{nanny.years_exp} χρόνια εμπειρίας</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="pagination">
                    <button
                        className={`page-button ${currentPage === 1 ? 'disabled' : ''}`}
                        onClick={() => handlePageChange(1)}
                        disabled={currentPage === 1}
                    >
                        &laquo;
                    </button>

                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}

                    <button
                        className={`page-button ${currentPage === totalPages ? 'disabled' : ''}`}
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        &gt;
                    </button>

                    <button
                        className={`page-button ${currentPage === totalPages ? 'disabled' : ''}`}
                        onClick={() => handlePageChange(totalPages)}
                        disabled={currentPage === totalPages}
                    >
                        &raquo;
                    </button>

                </div>
            </div>
        </div>
    );
}

export default Filtered;
