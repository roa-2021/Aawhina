exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('suburb').del()
    .then(function () {
      // Inserts seed entries
      return knex('suburb').insert([
        {id: 1, name: "Aro Valley", region: "Wellington", neighbours: []},
    {id: 2, name: "Berhampore", region: "Wellington", neighbours: []},
    {id: 3, name: "Breaker Bay", region: "Wellington", neighbours: []},
    {id: 4, name: "Broadmeadows", region: "Wellington", neighbours: []},
    {id: 5, name: "Brooklyn", region: "Wellington", neighbours: []},
    {id: 6, name: "Churton Park", region: "Wellington", neighbours: []},
    {id: 7, name: "Crofton Downs", region: "Wellington", neighbours: []},
    {id: 8, name: "Evans Bay", region: "Wellington", neighbours: []},
    {id: 9, name: "Glenside", region: "Wellington", neighbours: []},
    {id: 10, name: "Grenada North", region: "Wellington", neighbours: []},
    {id: 11, name: "Grenada", region: "Wellington", neighbours: []},
    {id: 12, name: "Happy Valley", region: "Wellington", neighbours: []},
    {id: 13, name: "Hataitai", region: "Wellington", neighbours: []},
    {id: 14, name: "Highbury", region: "Wellington", neighbours: []},
    {id: 15, name: "Horokiwi", region: "Wellington", neighbours: []},
    {id: 16, name: "Houghton Bay", region: "Wellington", neighbours: []},
    {id: 17, name: "Island Bay", region: "Wellington", neighbours: []},
    {id: 18, name: "Johnsonville", region: "Wellington", neighbours: []},
    {id: 19, name: "Kaiwharawhara", region: "Wellington", neighbours: []},
    {id: 20, name: "Karaka Bays", region: "Wellington", neighbours: []},
    {id: 21, name: "Karori", region: "Wellington", neighbours: []},
    {id: 22, name: "Kelburn", region: "Wellington", neighbours: []},
    {id: 23, name: "Khandallah", region: "Wellington", neighbours: []},
    {id: 24, name: "Kilbirnie", region: "Wellington", neighbours: []},
    {id: 25, name: "Kingston", region: "Wellington", neighbours: []},
    {id: 26, name: "Linden", region: "Wellington", neighbours: []},
    {id: 27, name: "Lyall Bay", region: "Wellington", neighbours: []},
    {id: 28, name: "Mākara", region: "Wellington", neighbours: []},
    {id: 29, name: "Mākara Beach", region: "Wellington", neighbours: []},
    {id: 30, name: "Maupuia", region: "Wellington", neighbours: []},
    {id: 31, name: "Melrose", region: "Wellington", neighbours: []},
    {id: 32, name: "Miramar", region: "Wellington", neighbours: []},
    {id: 33, name: "Mornington", region: "Wellington", neighbours: []},
    {id: 34, name: "Mount Cook", region: "Wellington", neighbours: []},
    {id: 35, name: "Mount Victoria", region: "Wellington", neighbours: []},
    {id: 36, name: "Newlands", region: "Wellington", neighbours: []},
    {id: 37, name: "Newtown", region: "Wellington", neighbours: []},
    {id: 38, name: "Ngaio", region: "Wellington", neighbours: []},
    {id: 39, name: "Ngauranga", region: "Wellington", neighbours: []},
    {id: 40, name: "Northland", region: "Wellington", neighbours: []},
    {id: 41, name: "Ohariu", region: "Wellington", neighbours: []},
    {id: 42, name: "Oriental Bay", region: "Wellington", neighbours: []},
    {id: 43, name: "Ōwhiro Bay", region: "Wellington", neighbours: []},
    {id: 44, name: "Paparangi", region: "Wellington", neighbours: []},
    {id: 45, name: "Pipitea", region: "Wellington", neighbours: []},
    {id: 46, name: "Redwood", region: "Wellington", neighbours: []},
    {id: 47, name: "Rongotai", region: "Wellington", neighbours: []},
    {id: 48, name: "Roseneath", region: "Wellington", neighbours: []},
    {id: 49, name: "Seatoun", region: "Wellington", neighbours: []},
    {id: 50, name: "Shelly Bay", region: "Wellington", neighbours: []},
    {id: 51, name: "Southgate", region: "Wellington", neighbours: []},
    {id: 52, name: "Strathmore Park", region: "Wellington", neighbours: []},
    {id: 53, name: "Takapu Valley", region: "Wellington", neighbours: []},
    {id: 54, name: "Tawa", region: "Wellington", neighbours: []},
    {id: 55, name: "Te Aro", region: "Wellington", neighbours: []},
    {id: 56, name: "Thorndon", region: "Wellington", neighbours: []},
    {id: 57, name: "Vogeltown", region: "Wellington", neighbours: []},
    {id: 58, name: "Wadestown", region: "Wellington", neighbours: []},
    {id: 59, name: "Wellington Central", region: "Wellington", neighbours: []},
    {id: 60, name: "Wilton", region: "Wellington", neighbours: []},
    {id: 61, name: "Woodridge", region: "Wellington", neighbours: []},
    {id: 62, name: "Worser Bay", region: "Wellington", neighbours: []},
    {id: 63, name: "Alicetown", region: "Lower Hutt", neighbours: []},
    {id: 64, name: "Arakura", region: "Lower Hutt", neighbours: []},
    {id: 65, name: "Ava", region: "Lower Hutt", neighbours: []},
    {id: 66, name: "Avalon", region: "Lower Hutt", neighbours: []},
    {id: 67, name: "Belmont", region: "Lower Hutt", neighbours: []},
    {id: 68, name: "Boulcott", region: "Lower Hutt", neighbours: []},
    {id: 69, name: "Days Bay", region: "Lower Hutt", neighbours: []},
    {id: 70, name: "Eastbourne", region: "Lower Hutt", neighbours: []},
    {id: 71, name: "Epuni", region: "Lower Hutt", neighbours: []},
    {id: 72, name: "Fairfield", region: "Lower Hutt", neighbours: []},
    {id: 73, name: "Glendale", region: "Lower Hutt", neighbours: []},
    {id: 74, name: "Gracefield", region: "Lower Hutt", neighbours: []},
    {id: 75, name: "Harbour View", region: "Lower Hutt", neighbours: []},
    {id: 76, name: "Haywards", region: "Lower Hutt", neighbours: []},
    {id: 77, name: "Homedale", region: "Lower Hutt", neighbours: []},
    {id: 78, name: "Hutt Central", region: "Lower Hutt", neighbours: []},
    {id: 79, name: "Kelson", region: "Lower Hutt", neighbours: []},
    {id: 80, name: "Korokoro", region: "Lower Hutt", neighbours: []},
    {id: 81, name: "Manor Park", region: "Lower Hutt", neighbours: []},
    {id: 82, name: "Maungaraki", region: "Lower Hutt", neighbours: []},
    {id: 83, name: "Melling", region: "Lower Hutt", neighbours: []},
    {id: 84, name: "Moera", region: "Lower Hutt", neighbours: []},
    {id: 85, name: "Naenae", region: "Lower Hutt", neighbours: []},
    {id: 86, name: "Normandale", region: "Lower Hutt", neighbours: []},
    {id: 87, name: "Parkway", region: "Lower Hutt", neighbours: []},
    {id: 88, name: "Petone", region: "Lower Hutt", neighbours: []},
    {id: 89, name: "Pomare", region: "Lower Hutt", neighbours: []},
    {id: 90, name: "Seaview", region: "Lower Hutt", neighbours: []},
    {id: 91, name: "Stokes Valley", region: "Lower Hutt", neighbours: []},
    {id: 92, name: "Taitā", region: "Lower Hutt", neighbours: []},
    {id: 93, name: "Tirohanga", region: "Lower Hutt", neighbours: []},
    {id: 94, name: "Wainuiomata", region: "Lower Hutt", neighbours: []},
    {id: 95, name: "Waiwhetū", region: "Lower Hutt", neighbours: []},
    {id: 96, name: "Waterloo", region: "Lower Hutt", neighbours: []},
    {id: 97, name: "Wingate", region: "Lower Hutt", neighbours: []},
    {id: 98, name: "Woburn", region: "Lower Hutt", neighbours: []},
    {id: 99, name: "Birchville", region: "Upper Hutt", neighbours: []},
    {id: 100, name: "Brown Owl", region: "Upper Hutt", neighbours: []},
    {id: 101, name: "Clouston Park", region: "Upper Hutt", neighbours: []},
    {id: 102, name: "Ebdentown", region: "Upper Hutt", neighbours: []},
    {id: 103, name: "Elderslea", region: "Upper Hutt", neighbours: []},
    {id: 104, name: "Emerald Hill", region: "Upper Hutt", neighbours: []},
    {id: 105, name: "Heretaunga", region: "Upper Hutt", neighbours: []},
    {id: 106, name: "Kingsley Heights", region: "Upper Hutt", neighbours: []},
    {id: 107, name: "Mangaroa", region: "Upper Hutt", neighbours: []},
    {id: 108, name: "Maoribank", region: "Upper Hutt", neighbours: []},
    {id: 109, name: "Maymorn", region: "Upper Hutt", neighbours: []},
    {id: 110, name: "Moonshine", region: "Upper Hutt", neighbours: []},
    {id: 111, name: "Parkdale", region: "Upper Hutt", neighbours: []},
    {id: 112, name: "Pinehaven", region: "Upper Hutt", neighbours: []},
    {id: 113, name: "Riverstone Terraces", region: "Upper Hutt", neighbours: []},
    {id: 114, name: "Silverstream", region: "Upper Hutt", neighbours: []},
    {id: 115, name: "Te Mārua", region: "Upper Hutt", neighbours: []},
    {id: 116, name: "Timberlea", region: "Upper Hutt", neighbours: []},
    {id: 117, name: "Tōtara Park", region: "Upper Hutt", neighbours: []},
    {id: 118, name: "Trentham", region: "Upper Hutt", neighbours: []},
    {id: 119, name: "Upper Hutt Central", region: "Upper Hutt", neighbours: []},
    {id: 120, name: "Wallaceville", region: "Upper Hutt", neighbours: []},
    {id: 121, name: "Whitemans Valley", region: "Upper Hutt", neighbours: []},
    {id: 122, name: "Aotea", region: "Porirua", neighbours: []},
    {id: 123, name: "Ascot Park", region: "Porirua", neighbours: []},
    {id: 124, name: "Camborne", region: "Porirua", neighbours: []},
    {id: 125, name: "Cannons Creek", region: "Porirua", neighbours: []},
    {id: 126, name: "Elsdon", region: "Porirua", neighbours: []},
    {id: 127, name: "Hongoeka", region: "Porirua", neighbours: []},
    {id: 128, name: "Judgeford", region: "Porirua", neighbours: []},
    {id: 129, name: "Karehana Bay", region: "Porirua", neighbours: []},
    {id: 130, name: "Kenepuru", region: "Porirua", neighbours: []},
    {id: 131, name: "Mana", region: "Porirua", neighbours: []},
    {id: 132, name: "Moonshine Valley", region: "Porirua", neighbours: []},
    {id: 133, name: "Onepoto", region: "Porirua", neighbours: []},
    {id: 134, name: "Paekākāriki Hill", region: "Porirua", neighbours: []},
    {id: 135, name: "Papakōwhai", region: "Porirua", neighbours: []},
    {id: 136, name: "Paremata", region: "Porirua", neighbours: []},
    {id: 137, name: "Pāuatahanui", region: "Porirua", neighbours: []},
    {id: 138, name: "Plimmerton", region: "Porirua", neighbours: []},
    {id: 139, name: "Porirua Central", region: "Porirua", neighbours: []},
    {id: 140, name: "Pukerua Bay", region: "Porirua", neighbours: []},
    {id: 141, name: "Rānui", region: "Porirua", neighbours: []},
    {id: 142, name: "Takapūwāhia", region: "Porirua", neighbours: []},
    {id: 143, name: "Tītahi Bay", region: "Porirua", neighbours: []},
    {id: 144, name: "Waitangirua", region: "Porirua", neighbours: []},
    {id: 145, name: "Whitby", region: "Porirua", neighbours: []},
    {id: 146, name: "Whitby", region: "Porirua", neighbours: []}
      ])
    })
}
