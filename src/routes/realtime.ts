import express from 'express';
import { get, ref } from "firebase/database"
import { realtime } from '../firebase/firebaseConfig';
import Middleware from '../middlewares/middleware';


const router = express.Router();

router.get('/',Middleware, async (req, res) => {
    try {
        const dbRef = ref(realtime, "/");
        const snapshot = await get(dbRef);

        if (!snapshot.exists()) {
            console.log("No data available");
            res.status(404).send("No data available");
        } else {
            const data = snapshot.val();
            console.log("Data from Firebase:", data);
            res.status(200).json(data); // Send the data as JSON response
        }

    } catch (error) {
        console.error("Error fetching data:", error);
    }
});

export default router;