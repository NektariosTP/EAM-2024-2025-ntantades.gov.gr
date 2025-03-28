import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AitisiForm.css";

function AitisiForm() {
  const navigate = useNavigate();
  const [nannyId] = useState(() => {
    const id = localStorage.getItem("nannyId");
    return id || null;
  });
  const [nanny, setNanny] = useState(null);
  const extraServicesOptions = ["Νοηματική γλώσσα", "Κώδικας μπράιγ", "Ειδικές ανάγκες", "Δίπλωμα οδήγησης", "Μαγειρική", "Εκπαίδευση", "Οικιακές Εργασίες"];
  const daysOfWeek = ["Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ", "Κυρ"];
  const [availabilityRows, setAvailabilityRows] = useState([
    { fromHour: "08", fromMinute: "00", toHour: "14", toMinute: "00", days: [] },
  ]);
  const [message, setMessage] = useState("");
  const maxMessageLength = 500;
  
  const handleMessageChange = (e) => {
    if (e.target.value.length <= maxMessageLength) {
      setMessage(e.target.value);
    }
  };

  useEffect(() => {
    const savedAvailabilityRows = localStorage.getItem("availabilityRows");
    
    if (savedAvailabilityRows) {
      try {
        const parsedRows = JSON.parse(savedAvailabilityRows);
        if (Array.isArray(parsedRows)) {
          setAvailabilityRows(parsedRows);
        } else {
          setAvailabilityRows([
            { fromHour: "08", fromMinute: "00", toHour: "14", toMinute: "00", days: [] },
          ]);
        }
      } catch (error) {
        console.error("Error parsing availabilityRows from localStorage:", error);
        setAvailabilityRows([
          { fromHour: "08", fromMinute: "00", toHour: "14", toMinute: "00", days: [] },
        ]);
      }
    } else {
      setAvailabilityRows([
        { fromHour: "08", fromMinute: "00", toHour: "14", toMinute: "00", days: [] },
      ]);
    }
  }, []);

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

  useEffect(() => {
    if (nannyId) {
      const selectedNanny = nannies.find((n) => n.id === parseInt(nannyId, 10));
      if (selectedNanny) {
        setNanny(selectedNanny);
      }
    }
  }, [nannyId]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobilephone: "",
    email: "",
    workStatus: "",
    nannyworkStatus: "",
    date1: "",
    date2: "",
    provideArea: "",
    dateOfBirth: "",
    extraServices: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const greekRegex = /^[\u0370-\u03FF\s]+$/;
  const mobilephoneRegex = /^\d{10}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    // Load saved form data from localStorage when the component mounts
    const savedData = localStorage.getItem("parentFormData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []); // Empty dependency array means it only runs once when the component mounts

  const validateField = (name, value) => {
    let error = "";
    if (["firstName", "lastName"].includes(name)) {
      if (!greekRegex.test(value)) {
        error = "Μόνο ελληνικοί χαρακτήρες επιτρέπονται";
      }
    } else if (name === "mobilephone" && !mobilephoneRegex.test(value)) {
      error = "Μη έγκυρος αριθμός κινητού τηλεφώνου. 10 ψηφία απαιτούνται.";
    } else if (name === "email" && !emailRegex.test(value)) {
      error = "Μη έγκυρο e-mail";
    } else if (name === "workStatus" && !value){
      error = "Πρέπει να συμπληρώσετε το πεδίο.";
    } else if (name === "nannyworkStatus" && !value){
      error = "Πρέπει να συμπληρώσετε το πεδίο.";
    } else if ((name === "date1" || name === "date2") && !value) {
      error = "Η ημερομηνία είναι υποχρεωτική";
    } else if (name === "date2") {
      const startDate = new Date(formData.date1);
      const endDate = new Date(value);
      if (startDate && endDate && startDate > endDate) {
        error = "Η ημερομηνία λήξης προηγείται της ημερομηνίας έναρξης";
      }
    } else if (name !== "provideArea" && !value) {
      error = "Απαιτείται η συμπλήρωση του πεδίου";
    } else if (name !== "dateOfBirth" && !value) {
      error = "Η ημερομηνία γέννησης είναι υποχρεωτική";
    } 
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // Update form data
    const updatedFormData = {
      ...formData,
      [name]: value,
    };
  
    setFormData(updatedFormData);
  
    // Store updated form data in localStorage
    localStorage.setItem("parentFormData", JSON.stringify(updatedFormData));
  
    setErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors };
      if (updatedErrors[name] === "Απαιτείται η συμπλήρωση του πεδίου") {
        delete updatedErrors[name];
      }
      return updatedErrors;
    });
  
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prevErrors) => {
        const updatedErrors = { ...prevErrors, [name]: error };
        if (!error) delete updatedErrors[name];
        return updatedErrors;
      });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prevTouched) => ({ ...prevTouched, [name]: true }));
    const error = validateField(name, value);
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const newErrors = {};
  
    Object.keys(formData).forEach((field) => {
      const value = formData[field];
      const error = validateField(field, value);
  
      // If the field is empty and required, or if it fails validation, add to newErrors
      if (!value) {
        newErrors[field] = "Απαιτείται η συμπλήρωση του πεδίου";
      } else if (error) {
        newErrors[field] = error;
      }
    });
  
    // Update the state for errors
    setErrors(newErrors);
  
    // If there are any errors, do NOT navigate
    if (Object.keys(newErrors).length === 0) {
      console.log("Form Data Submitted: ", formData);
      navigate("/Goneis/Aggelies/Profile/Epitixia_aitisis_endiaferontos");
    } else {
      console.log("Validation Errors: ", newErrors);
    }
  };
  
  const handleFocus = (e) => {
    const { name } = e.target;
    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));
  };

  const handleTimeChange = (index, field, value) => {
    const updatedRows = [...availabilityRows];
    updatedRows[index][field] = value;
    setAvailabilityRows(updatedRows);
    localStorage.setItem("availabilityRows", JSON.stringify(updatedRows));
  };

  const handleDayToggle = (index, day) => {
    const updatedRows = [...availabilityRows];
    const dayIndex = updatedRows[index].days.indexOf(day);
    if (dayIndex === -1) {
      updatedRows[index].days.push(day);
    } else {
      updatedRows[index].days.splice(dayIndex, 1);
    }
    setAvailabilityRows(updatedRows);
    localStorage.setItem("availabilityRows", JSON.stringify(updatedRows));
  };

  const addRow = () => {
    setAvailabilityRows([
      ...availabilityRows,
      { fromHour: "00", fromMinute: "00", toHour: "00", toMinute: "00", days: [] },
    ]);
  };

  const clearAll = () => {
    setAvailabilityRows([{ fromHour: "00", fromMinute: "00", toHour: "00", toMinute: "00", days: [] }]);
  };

  const deleteRow = (index) => {
    const updatedRows = [...availabilityRows];
    updatedRows.splice(index, 1);
    setAvailabilityRows(updatedRows);
    localStorage.setItem("availabilityRows", JSON.stringify(updatedRows));
  };

  const generateOptions = (start, end) => {
    const options = [];
    for (let i = start; i <= end; i++) {
      options.push(
        <option key={i} value={String(i).padStart(2, "0")}>
          {String(i).padStart(2, "0")}
        </option>
      );
    }
    return options;
  };

  return (
    <div className="rantevou-container">
      <div className="rantevou-title1">
        <h2>Αίτηση ενδιαφέροντος συνεργασίας</h2>
      </div>

      {nanny ? (
        <div key={nanny.id} className="filtered-card-rantevou">
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
      ) : (
        <p>Δεν βρέθηκε το προφίλ της νταντάς.</p>
      )}

      <div className="ad-creation-form">
        <p>Παρακαλούμε συμπληρώστε τις παρακάτω πληροφορίες για την αίτηση σας.</p>
        <label>1. Προσωπικά Στοιχεία Γονέα</label>
        <label className="label-nanny-register">Όνομα</label>
        <div className="hint">Μόνο ελληνικοί χαρακτήρες</div>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          className={touched.firstName ? "input-nanny" : ""}
        />
        {errors.firstName && <div className="error-message">{errors.firstName}</div>}

        <label className="label-nanny-register">Επώνυμο</label>
        <div className="hint">Μόνο ελληνικοί χαρακτήρες</div>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          className={touched.lastName ? "input-nanny" : ""}
        />
        {errors.lastName && <div className="error-message">{errors.lastName}</div>}

        <label className="label-nanny">Κινητό Τηλέφωνο</label>
        <input
          type="text"
          name="mobilephone"
          value={formData.mobilephone}
          onChange={handleChange}
          onBlur={handleBlur}
          className={touched.mobilephone ? "input-nanny" : ""}
        />
        {errors.mobilephone && <div className="error-message">{errors.mobilephone}</div>}

        <label className="label-nanny">E-mail</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.email ? "input-nanny" : ""}
        />
        {errors.email && <div className="error-message">{errors.email}</div>}

        <label>2. Προσωπικά Στοιχεία Νταντάς</label>
        <label className="label-nanny-register">Όνομα</label>
        <input
          type="text"
          name="firstName1"
          value={nanny ? nanny.name.split(" ")[0] : ""}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          className={touched.firstName1 ? "input-nanny" : ""}
        />

        <label className="label-nanny-register">Επώνυμο</label>
        <input
          type="text"
          name="lastName1"
          value={nanny ? nanny.name.split(" ")[1] || "" : ""}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          className={touched.lastName1 ? "input-nanny" : ""}
        />

        <label className="label-nanny">Κινητό Τηλέφωνο</label>
        <input
          type="text"
          name="mobilephone1"
          value={nanny ? `${nanny.call}` : ""}
          onChange={handleChange}
          onBlur={handleBlur}
          className={touched.mobilephone1 ? "input-nanny" : ""}
        />

        <label className="label-nanny">E-mail</label>
        <input
          type="text"
          name="email1"
          value={nanny ? `${nanny.email}` : ""}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.email1 ? "input-nanny" : ""}
        />

        <label>3. Λεπτομέρειες Συνεργασίας</label>
        <label className="nanny-label">Υφιστάμενη Επαγγελματική Κατάσταση</label>
        <div className="currentbusinessstatus">
          <select
            name="workStatus"
            value={formData.workStatus}
            onChange={handleChange}
            className={errors.workStatus ? "error" : ""}
          >
            <option value="">Επιλέξτε Υφιστάμενη Επαγγελματική Κατάσταση</option>
            <option value="unemployed">Άνεργος</option>
            <option value="fulltime">Σε καθεστώς Πλήρους Απασχόλησης</option>
            <option value="parttime">Σε καθεστώς Μερικούς Απασχόλησης</option>
            <option value="freeemployee">Ελεύθερος Επαγγελματίας</option>
            <option value="other">Άλλο</option>
          </select>
          {errors.workStatus && ( <div className="error-message">{errors.workStatus}</div> )}
          {["fulltime", "freeemployee"].includes(formData.workStatus) ? (
            <label className="nanny-label">
              Σύμφωνα με την υφιστάμενη επαγγελματική κατάσταση του γονέα το ποσό της
              χορήγησης (voucher) ανέρχεται στα πεντακόσια (500) ευρώ μηνιαίως.
              </label>
          ) : formData.workStatus && (
            <label className="nanny-label">
              Σύμφωνα με την υφιστάμενη επαγγελματική κατάσταση του γονέα το ποσό της
              χορήγησης (voucher) ανέρχεται στα τριακόσια (300) ευρώ μηνιαίως.
            </label>
          )}
        </div>

        <label className="nanny-label">Tύπος Απασχόλησης Νταντάς</label>
        <div className="currentbusinessstatus">
          <select
            name="nannyworkStatus"
            value={formData.nannyworkStatus}
            onChange={handleChange}
            className={errors.nannyworkStatus ? "error" : ""}
          >
            <option value="">Επιλέξτε Tύπο Απασχόλησης Νταντάς</option>
            <option value="fulltime">Πλήρη Απασχόληση</option>
            <option value="parttime">Μερική Απασχόληση</option>
          </select>
          {errors.nannyworkStatus && ( <div className="error-message">{errors.nannyworkStatus}</div> )}
        </div>

        <label className="label-nanny-register">Διάστημα συνεργασίας</label>
        <label className="label-nanny-register1">Έναρξη</label>
        <input
          type="date"
          name="date1"
          value={formData.date1}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          className={touched.date1 ? "input-nanny" : ""}
        />
        {errors.date1 && <div className="error-message">{errors.date1}</div>}
        <label className="label-nanny-register1">Λήξη</label>
        <input
          type="date"
          name="date2"
          value={formData.date2}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          className={touched.date2 ? "input-nanny" : ""}
        />
        {errors.date2 && <div className="error-message">{errors.date2}</div>}

        <label className="label-nanny-register">Χώρος Παροχής Φροντίδας</label>
        <div className="radio-group">
          <label className="label-nanny-register">
            <input className="input-nanny"
              type="radio"
              name="provideArea"
              value="Στον_χώρο_του_γονέα"
              checked={formData.provideArea === "Στον_χώρο_του_γονέα"}
              onChange={handleChange}
            />
            Στον χώρο του Γονέα
          </label>
          <label className="label-nanny-register">
            <input className="input-nanny"
              type="radio"
              name="provideArea"
              value="Στον_χώρο_της_νταντάς"
              checked={formData.provideArea === "Στον_χώρο_της_νταντάς"}
              onChange={handleChange}
            />
            Στον χώρο της Νταντάς
          </label>
        </div>

        <div className="section-ad-creation">
          <label className="label-nanny">Ωράριο Διαθεσιμότητας<br/>Παρακαλούμε συμπληρώστε τις ημέρες και τις ώρες στις οποίες είστε διαθέσιμος/η</label>
          <div className="availability">
            {availabilityRows.map((row, index) => (
              <div key={index} className="availability-row">
                {/* Time Selection */}
                <div className="time-selection">
                  <label className="label-nanny-register-ad-creation">
                    Από:
                    <select
                      value={row.fromHour}
                      onChange={(e) => handleTimeChange(index, "fromHour", e.target.value)}
                    >
                      {generateOptions(0, 23)}
                    </select>
                    :
                    <select
                      value={row.fromMinute}
                      onChange={(e) => handleTimeChange(index, "fromMinute", e.target.value)}
                    >
                      {generateOptions(0, 59)}
                    </select>
                  </label>
                  <label className="label-nanny">
                    Έως:
                    <select
                      value={row.toHour}
                      onChange={(e) => handleTimeChange(index, "toHour", e.target.value)}
                    >
                      {generateOptions(0, 23)}
                    </select>
                    :
                    <select
                      value={row.toMinute}
                      onChange={(e) => handleTimeChange(index, "toMinute", e.target.value)}
                    >
                      {generateOptions(0, 59)}
                    </select>
                  </label>
                </div>
                {/* Day Selection */}
                <div className="days">
                  {daysOfWeek.map((day) => (
                    <label key={day} className="day-checkbox">
                      <input className="input-nanny"
                        type="checkbox"
                        checked={row.days.includes(day)}
                        onChange={() => handleDayToggle(index, day)}
                      />
                      {day}
                    </label>
                  ))}
                </div>
                {/* Delete Row */}
                <button onClick={() => deleteRow(index)} className="delete-row">
                  X
                </button>
              </div>
            ))}
          </div>
          {/* Actions */}
          <div className="actions-ad-creation">
            <button onClick={addRow}>+ Προσθήκη Ώρας</button>
            <button onClick={clearAll}>Εκκαθάριση</button>
          </div>
        </div>

        <label>4. Λεπτομέρειες για την Παροχή Φροντίδας</label>
        <label className="label-nanny-register">Ημερομηνία Γέννησης</label>
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          className={touched.dateOfBirth ? "input-nanny" : ""}
        />
        {errors.dateOfBirth && <div className="error-message">{errors.dateOfBirth}</div>}

        <div className="filter-group">
          <label className="label-nanny-register">Επιπλέον Παροχές:</label>
          {extraServicesOptions.map((service) => (
            <div key={service}>
              <input
                type="checkbox"
                name="extraServices"
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                className={touched.extraServices ? "input-nanny" : ""}
              />
              <label className="filter-group-label">{service}</label>
            </div>
          ))}
        </div>

        <p>
          <strong>Μήνυμα για επιπλέον πληροφορίες</strong>
          <br />
          <textarea
            name="message"
            value={message}
            onChange={handleMessageChange}
            maxLength={maxMessageLength}
            required
          />
          <div className="char-counter1">
            {maxMessageLength - message.length} χαρακτήρες απομένουν
          </div>
        </p>

        <div className="button-group-nannies-ad-creation">
          <button type="button" className="ad-clear-form1" onClick={() => navigate("/")}>
            Ακύρωση
          </button>
          <button type="button" onClick={() => navigate("/Goneis/Aggelies/Profile/Prosorini_Aitisi_endiaferontos")}>
            Προσωρινή Αποθήκευση
          </button>
          <button type="submit" className="submit-button" onClick={handleSubmit}>
            Οριστική Υποβολή
          </button>
        </div>
      </div>
    </div>
  );
}

export default AitisiForm;
