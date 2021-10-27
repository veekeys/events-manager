const events: ScheduledEvent[] = [
  {
    date: "2022-06-21",
    city: "Tarma",
    price: "$154.55",
    time: "7:26 PM",
    address: "6227 Non Avenue",
  },
  {
    date: "2022-08-17",
    city: "Bremerhaven",
    price: "$147.56",
    time: "9:47 PM",
    address: "P.O. Box 814, 9697 Ante Rd.",
  },
  {
    date: "2022-05-03",
    city: "York",
    price: "$100.78",
    time: "9:06 PM",
    address: "419-1109 Tempus, Rd.",
  },
  {
    date: "2022-07-05",
    city: "Juliaca",
    price: "$62.17",
    time: "8:56 PM",
    address: "4004 Ac Ave",
  },
  {
    date: "2022-05-21",
    city: "Mora",
    price: "$110.32",
    time: "10:41 PM",
    address: "P.O. Box 970, 8695 Leo. Av.",
  },
  {
    date: "2022-05-12",
    city: "Jhang",
    price: "$154.01",
    time: "6:06 PM",
    address: "P.O. Box 180, 5871 Maecenas Ave",
  },
  {
    date: "2022-03-19",
    city: "Belford Roxo",
    price: "$127.17",
    time: "9:40 PM",
    address: "Ap #111-3191 Ligula. St.",
  },
  {
    date: "2022-03-17",
    city: "Tranås",
    price: "$149.60",
    time: "7:19 PM",
    address: "Ap #422-4040 In Rd.",
  },
  {
    date: "2022-04-24",
    city: "Rödermark",
    price: "$42.68",
    time: "8:09 PM",
    address: "374-4096 Justo St.",
  },
  {
    date: "2022-09-03",
    city: "Palmerston",
    price: "$106.47",
    time: "10:51 PM",
    address: "192-5230 Etiam Street",
  },
];

export type ScheduledEvent = {
    date: String;
    city: String;
    price: String;
    time: String;
    address: String;
}

export const getEvents = (): Promise<ScheduledEvent[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(events);
    }, 1000);
  });
}

export const addEvent = (event: ScheduledEvent) => {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      events.push(event);
      resolve();
    }, 1000);
  });
}
