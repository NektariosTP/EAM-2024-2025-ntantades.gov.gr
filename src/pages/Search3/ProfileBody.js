import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './ProfileBody.css';

function ProfileBody() {
  const [nannyId] = useState(() => {
    const id = localStorage.getItem("nannyId");
    return id || null;
  });
  const [nanny, setNanny] = useState(null);

  const isParentLoggedIn = localStorage.getItem("isParentLoggedIn") === "true";
  const isNannyLoggedIn = localStorage.getItem("isNannyLoggedIn") === "true";
  const [showPopup, setShowPopup] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const togglePopup = () => setShowPopup(!showPopup);

  const handleLogin = (role) => {
    let valid = true;

    if (!email.trim()) {
      setEmailError("Το email είναι υποχρεωτικό.");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!password.trim()) {
      setPasswordError("Το συνθηματικό είναι υποχρεωτικό.");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (!valid) return;

    if (role === "Γονέας") {
      localStorage.setItem("isParentLoggedIn", true);
    } else if (role === "Νταντά") {
      localStorage.setItem("isNannyLoggedIn", true);
    }
    window.location.reload();
  };

  
  const nannies = [
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
      employmentType: "Μερική Απασχόληση",
      locationRange: ["Καισαριανή", "Βύρωνας", "Παγκράτι", "Ζωγράφου"],
      parentLocation: true,
      nannyLocation: false,
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

  useEffect(() => {
      console.log("useEffect triggered with nannyId: ", nannyId);
      if (nannyId) {
          const selectedNanny = nannies.find((n) => n.id === parseInt(nannyId, 10));
          if (selectedNanny) {
              setNanny(selectedNanny);
          } else {
              console.warn(`No nanny found with ID: ${nannyId}`);
          }
      }
  }, [nannyId]);

  if (!nanny) {
    return <p>Δεν βρέθηκε το προφίλ της νταντάς.</p>;
  }

  return (
    <div className="profile-body">
      <div className="left-section">
        <div className="description">

          <h3 className='section-title'>Περιγραφή</h3>
          <p>
            {nanny.info}
          </p>
        </div>

        <div className="attached-files">
          <h3 className='section-title'>Συνημμένα Αρχεία</h3>
          <ul>
            <li><a href="https://example.com/biografiko.pdf" target="_blank">Βιογραφικό</a></li>
            <li><a href="https://example.com/systatikes_epistoles.pdf" target="_blank">Συστατικές Επιστολές</a></li>
            <li><a href="https://example.com/pistopoiitiko_proton_voitheion.pdf" target="_blank">Πιστοποιητικό Πρώτων Βοηθειών</a></li>
          </ul>
        </div>
        
        <div className="availability">
          <h3 className='section-title'>Διαθεσιμότητα</h3>
          <table>
            <thead>
              <tr>
                <th></th> {/* Empty header for the first column */}
                {["Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ", "Κυρ"].map((day, index) => (
                  <th key={index}>{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { time: "Πρωί", img: "/morning.png" },
                { time: "Μεσημέρι", img: "/day.png" },
                { time: "Απόγευμα", img: "/afternoon.png" },
                { time: "Νύχτα", img: "/night.png" },
              ].map((timeSlot, rowIndex) => (
                <tr key={rowIndex}>
                  {/* First column with image and label */}
                  <td>
                    <img src={timeSlot.img} alt={timeSlot.time} className="time-icon" />
                    <span>{timeSlot.time}</span>
                  </td>
                  {/* Availability for each day */}
                  {["Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ", "Κυρ"].map((day, colIndex) => (
                    <td key={colIndex}>
                      {nanny.availabilityDays.includes(day) &&
                      nanny.availabilityTimes.includes(timeSlot.time)
                        ? "✔"
                        : ""}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="areas">
          <h3 className='section-title'>Περιοχές Εξυπηρέτησης</h3>
          {nanny.locationRange.map((location, index) => (
            <span key={index}>{location}</span>
          ))}
        </div>

        <div className='extra'>
          <div className="extra-services">
            <h3 className='section-title'>Επιπλέον Παροχές</h3>
            <ul>
              {nanny.extraServices.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>

          <div className="extra-languages">
            <h3 className='section-title'>Επιπλέον Γλώσσες</h3>
            {nanny.languages.map((language, index) => (
              <span key={index}>{language}</span>
            ))}
          </div>
        </div>

        <div className="reviews">
          <h3 className="section-title">Κριτικές ({nanny.review_count})</h3>
          {nanny.review_text
            .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort reviews by newest first
            .slice(0, 10) // Limit to 10 reviews
            .map((review, index) => (
              <div className="review" key={index}>
                <p>
                  <strong>{review.reviewer}</strong> |{" "}
                  {new Date(review.date).toLocaleDateString("el-GR")}
                </p>
                <p>{review.review}</p>
              </div>
            ))}
        </div>
      </div>

      <div className="right-section">

        <div className="location-info">
          <h3 className='section-title'>Πληροφορίες</h3>

          {nanny.parentLocation && (
            <p>
              🏡 Πηγαίνω στο χώρο της οικογένειας<br />
              {nanny.locationRange.length} περιοχές
            </p>
          )}
          {nanny.nannyLocation && (
            <p>
              📍 Παρέχω φροντίδα στο χώρο μου<br />
              {nanny.location}
            </p>
          )}
          <p>
          {nanny.employmentType === "Πλήρης"
            ? "💼 Αναζητώ πλήρη απασχόληση"
            : "⏳ Αναζητώ μερική απασχόληση"}
          </p>
        </div>

        <div className="contact-section">
          <h3 className='section-title'>Επικοινωνία με Νταντά</h3>
          <p>Θα σας ζητηθεί να συνδεθείτε ή να δημιουργήσετε λογαριασμό</p>
          {isParentLoggedIn ? (
              <>
                  <button className="profile-button" onClick={() => window.location.href = "/Goneis/Aggelies/Profile/Rantevou"}>Προγραμματισμός ραντεβού γνωριμίας</button>
                  <button className="profile-button" onClick={() => window.location.href = "/Goneis/Aggelies/Profile/Aitisi_endiaferontos"}>Αίτηση ενδιαφέροντος συνεργασίας</button>
              </>
          ) : (
              <>
                <button className="profile-button" onClick={togglePopup}>Προγραμματισμός ραντεβού γνωριμίας</button>
                <button className="profile-button" onClick={togglePopup}>Αίτηση ενδιαφέροντος συνεργασίας</button>
              </>
          )}
        </div>
      </div>

      {showPopup && (
        <div className="popup-overlay" onClick={togglePopup}>
            <div className="popup" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={togglePopup}>×</button>
                <div className="popup-header">
                    <button
                        className={`popup-tab1 ${isLogin ? "active" : ""}`}
                        onClick={() => setIsLogin(true)}
                    >
                        Σύνδεση
                    </button>
                    <button
                        className={`popup-tab1 ${!isLogin ? "active" : ""}`}
                        onClick={() => setIsLogin(false)}
                    >
                        Εγγραφή
                    </button>
                </div>
                {isLogin ? (
                    <div className="login-section">
                        <div className="govgr-card__content">
                            <img
                                style={{
                                    maxHeight: "80px",
                                    maxWidth: "90%",
                                    display: "block",
                                    margin: "auto",
                                    textAlign: "center",
                                    objectFit: "contain",
                                }}
                                alt="bank logos"
                                src="/taxisnet.png"
                            />
                        </div>
                        Email<br/>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="login-input"
                        />
                        {emailError && <div className="error-text-log-in">{emailError}</div>}
                        <br/>Συνθηματικό<br/>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="login-input"
                        />
                        {passwordError && <div className="error-text-log-in">{passwordError}</div>}
                        <div className="login-buttons">
                            <button
                                className="govgr-btn"
                                onClick={() => handleLogin("Γονέας")}
                            >
                                Σύνδεση ως Γονέας
                            </button>
                            <button
                                className="govgr-btn"
                                onClick={() => handleLogin("Νταντά")}
                            >
                                Σύνδεση ως Νταντά
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="signup-options">
                        <button onClick={() => navigate("/Goneis/Eggrafi")}>Εγγραφή ως Γονέας</button>
                        <button onClick={() => navigate("/Ntantades/Eggrafi")}>Εγγραφή ως Νταντά</button>
                    </div>
                )}
            </div>
        </div>
      )}

    </div>
  );
};

export default ProfileBody;
