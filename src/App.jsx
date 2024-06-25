/* eslint-disable react/prop-types */
import { Button, Input, Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";
import { useState } from "react";

const ListKhodam = [
  "Harimau Sumatra",
  "Aligator",
  "Drakk Sistem",
  "Bakwan",
  "Jamet",
  "Macan Garut",
  "Domba Racing",
  "Bocil Ep Ep",
  "Kak Gem",
  "Tuyul",
  "Singa",
  "Jerapah",
  "Kucing Oren",
  "Kambing Guling",
  "Babi Hutan",
  "Jamet",
  "Lalat Hijau",
];

export default function App() {
  const [nama, setNama] = useState("");
  const [khodamImageUrl, setKhodamImageUrl] = useState("");
  const [khodam, setKhodam] = useState("");

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const handleSubmit = () => {
    if (nama) {
      const filteredKhodam = ListKhodam.filter((k) => k);
      const randomKhodam = filteredKhodam[Math.floor(Math.random() * filteredKhodam.length)];
      let imageUrl = "";
      setKhodam(randomKhodam);
      if (randomKhodam === "kosong") {
        imageUrl = "/img/kosong.jpeg";
      } else {
        const formattedKhodam = randomKhodam.toLowerCase().replace(/ /g, "-");
        imageUrl = `/img/${encodeURIComponent(formattedKhodam)}.jpeg`;
      }

      setKhodamImageUrl(imageUrl);
      handleOpen();
    }
  };

  return (
    <div
      className="min-h-screen w-full flex justify-center items-center"
      style={{
        backgroundImage: "url('/img/bg-1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container max-w-md">
        <div className="bg-dua p-5 rounded-lg shadow-xl bg-opacity-90">
          <h1 className="text-3xl font-bold text-white">Check Khodam Kamu</h1>
          <div className="w-full mt-10">
            <Input label="Nama" color="empat" value={nama} onChange={(e) => setNama(e.target.value)} error={!nama} style={{ color: "empat" }} className="bg-empat" />
            <Button className="w-full mt-5 bg-empat" onClick={handleSubmit}>
              Submit
            </Button>
            <div className="mt-5">
              <p className="italic text-center text-white">
                {" "}
                <a href="https://www.instagram.com/kh_badri_?igsh=cjg4aW45MzF3Mnhm">Created by Kh-Badri</a>
              </p>
            </div>
            <Result open={open} handleOpen={handleOpen} nama={nama} khodam={khodamImageUrl} namaKhodam={khodam} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Result({ open, handleOpen, nama, khodam, namaKhodam }) {
  return (
    <Dialog open={open} handler={handleOpen} className="max-h-[90vh] overflow-y-scroll">
      <DialogHeader>Hasil</DialogHeader>
      <DialogBody>
        <h3 className="text-xl font-medium">Nama: {nama}</h3>
        <h4 className="text-xl font-medium">
          Kamu Memiliki Khodam: <span className="font-semibold">{namaKhodam}</span>
        </h4>
        <div className="flex justify-center">
          <img src={khodam} alt={namaKhodam} className="mt-5 rounded-lg shadow-md text-center justify-center" />
        </div>
      </DialogBody>
      <DialogFooter>
        <Button variant="text" color="red" onClick={handleOpen} className="mr-1">
          <span>Cancel</span>
        </Button>
        <Button variant="gradient" color="green" onClick={handleOpen}>
          <span>Confirm</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
