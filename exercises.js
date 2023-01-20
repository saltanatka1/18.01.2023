//1 Чему равняется площадь треугольника с высотой 5см и шириной 8см
let height = 5;
let width = 8;
let triangleArea = (height * width) / 2;
let triangleAreaResult = 'площадь треугольника ' + triangleArea + 'см';
console.log(triangleAreaResult);

//2 Сколько минут в 56 часах
let hours = 56;
let minutes = hours * 60;
let minutesResult = minutes + " минут";
console.log(minutesResult);

//3 Программист работал 8 полных рабочих дней по ставке $50 в час .Сколько он заработал?
let workday = 8;
let usd = 50;
let earnings = (workday * 8) * usd;
let earningsResult = earnings + '$';
console.log(earningsResult);

//4 Клиент в кофейне хочет оставить 15% чаевых при счете 1566 сом .СКолько это сомов?
let check = 1566;
let percent = 15;
let tips = (check * percent) / 100;
let tipsResult = tips + "сом";
console.log(tipsResult);

//5 Баскетбольная команда забила 8 двух-очковых и 6 трех-очковых мячей.Сколтко очков получила команда?
let twoPoints = 8;
let threePoints = 6;
let points = (twoPoints * 2) + (threePoints * 3);
let pointsResult = points + " очков";
console.log(pointsResult);

//6 Расход топлива у трактора 22 литра на 100 километров.Сколько километров проедет трактор на 100 литрах?
let consumption = 22;
let kilometer = 100;
let liter = 100;
let passedKilometer = (liter / consumption) * liter;
let passedKilometerResult = passedKilometer + "километров";
console.log(passedKilometerResult);

//7 У фермера 5 коров , 6 кур и 12 овец.Посчитайте кол-во ног на ферме?
let cow = 5;
let chicken = 6;
let sheep = 12;
let footfarm = (cow * 4) + (chicken * 2) + (sheep * 4);
let footfarmResult = footfarm + ' ног в ферме';
console.log(footfarmResult);

//8 Обогреватель расходует 2.4 кв/ч.Сколько нужно заплатить РЭС , учитывая то что обогреватель работал 46 часов , а тариф электро-энергии 2.44 сом за кв/ч.
let kilowattHour = 2.4;
let hour = 46;
let som = 2.44;
let paymentofExpanses = kilowattHour * hour * som;
let paymentofExpansesResult = paymentofExpanses + ' сом нужно заплатить';
console.log(paymentofExpansesResult);

//9 Сколько нужно оплатить за отправку посылки размером 23 см высота , 33 см ширина , 50см длина ,и весом 12кг.При тарифе 499 сом за кг объемного веса.
let heightPackage = 23;
let widthPackage = 33;
let lengthPackage = 50;
let theweightPackage = 12;
let tariffPrice = 499;
let paymentForTheParcel1 = (heightPackage * widthPackage * lengthPackage / 5000 ) * tariffPrice;
let paymentForTheParcel2 = theweightPackage * tariffPrice;
let paymentForTheParcelResult = paymentForTheParcel1 + " или " + paymentForTheParcel2 + " сом нужно оплатить";
console.log(paymentForTheParcelResult);   
