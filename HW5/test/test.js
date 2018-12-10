'use strict';

test('test_string', () => {
    expect('Oleg'.length).toEqual(4);
    expect('Oleg'.charAt(0)).toEqual('O');
    expect('Oleg'.concat(' ', 'Shut')).toEqual('Oleg Shut');
    expect(String.fromCharCode(65, 66, 67)).toEqual('ABC');
    expect(String.fromCodePoint(65, 90)).toEqual('AZ');
    expect('Oleg'.charCodeAt(0)).toEqual(79);
    expect('Oleg'.codePointAt(1)).toEqual(108);
    expect('Oleg have a dog'.endsWith('dog')).toEqual(true);
    expect('Oleg have a dog'.includes('have')).toEqual(true);
    expect('Oleg have a dog'.indexOf('d')).toEqual(12);
    expect('Oleg have a dog'.lastIndexOf('a')).toEqual(10);
    expect('Oleg have a dog'.localeCompare('O')).toEqual(1);
    expect('Oleg have a dog'.normalize()).toEqual('Oleg have a dog');
    expect('Oleg have a dog'.padEnd(17, 'gy')).toEqual('Oleg have a doggy');
    expect('Oleg have a dog'.padStart(20, 'Good ')).toEqual('Good Oleg have a dog');
    expect('Oleg have a dog '.repeat(2)).toEqual('Oleg have a dog Oleg have a dog ');
    expect('Oleg have a dog'.replace(/Oleg/i, 'Max')).toEqual('Max have a dog');
    expect('Oleg have a dog'.search('have')).toEqual(5);
    expect('Oleg have a dog'.slice(5)).toEqual('have a dog');
    expect('Oleg have a dog'.split(' ')).toEqual(['Oleg', 'have', 'a', 'dog']);
    expect('Oleg have a dog'.startsWith('dog', 12)).toEqual(true);
    expect('Oleg have a dog'.substr(5, 4)).toEqual('have');
    expect('Oleg have a dog'.substring(1, 8)).toEqual('leg hav');
    expect('Oleg Have A Dog'.toLocaleLowerCase()).toEqual('oleg have a dog');
    expect('oleg have a dog'.toLocaleUpperCase()).toEqual('OLEG HAVE A DOG');
    expect('OLEG HAVE A DOG'.toLowerCase()).toEqual('oleg have a dog');
    expect(['Oleg', 'have', 'a', 'dog'].toString()).toEqual('Oleg,have,a,dog');
    expect('oleg have a dog'.toUpperCase()).toEqual('OLEG HAVE A DOG');
    expect('    OLEG HAVE A DOG    '.trim()).toEqual('OLEG HAVE A DOG');
    expect('    Oleg Have A Dog'.trimLeft()).toEqual('Oleg Have A Dog');
    expect('Oleg Have A Dog      '.trimRight()).toEqual('Oleg Have A Dog');
    expect('Oleg Have A Dog'.valueOf()).toEqual('Oleg Have A Dog');
});

test('test_numbers', () => {
    expect(Number.isInteger(2)).toEqual(true);
    expect(Number.NaN).toEqual(NaN);
    expect(Number.isFinite(0)).toEqual(true);
    expect(Number.isNaN(12)).toEqual(false);
    expect(Number.isSafeInteger(34500000)).toEqual(true);
    expect(Number.parseFloat("Oleg have a dog")).toEqual(NaN);
    expect(Number.parseInt('123')).toEqual(123);
    expect(323.2523.toExponential(2)).toEqual('3.23e+2');
    expect(323.2523.toFixed()).toEqual('323');
    expect(1234.23423.toLocaleString()).toEqual('1,234.234');
    expect(12451.123.toPrecision(3)).toEqual('1.25e+4');
    expect(2345234 .toString()).toEqual('2345234');
    expect(12324 .valueOf()).toEqual(12324);
});

test('test_arrays', () => {
    expect(['Oleg', 'Shana'].length).toEqual(2);
    expect(['Oleg', 'Alex', 'Sha'].copyWithin(1, 0)).toEqual(['Oleg', 'Oleg', 'Alex']);
    expect([24, 28, 54, 87].every(el => el >= 10)).toEqual(true);
    expect(['Oleg', 'Alex', 'Sha'].fill('Mike')).toEqual(['Mike', 'Mike', 'Mike']);
    expect(['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'].filter(word => word.length > 8))
        .toEqual(['exuberant', 'destruction']);
    expect([54, 34, 67, 89, 90].find(el => el >=60)).toEqual(67);
    expect([55, 66, 92, 22, 12].findIndex(el => el >= 80)).toEqual(2);
    expect([34, 23, 98, 12].includes(23)).toEqual(true);
    expect([44, 23, 12, 89].indexOf(23)).toEqual(1);
    expect(['Oleg', 'Alex', 'Sha'].join(' ')).toEqual('Oleg Alex Sha');
    expect(['Oleg', 'Alex', 'Sha'].lastIndexOf('Alex')).toEqual(1);
    expect(['Oleg', 'Alex', 'Sha'].pop()).toEqual('Sha');
    expect(['Oleg', 'Alex', 'Sha'].push('Max', 'Den')).toEqual(5);
    expect([1, 2, 3, 4, 5].reduce((el => el))).toEqual(1);
    expect([1, 2, 3, 4, 5].reduceRight((el => el))).toEqual(5);
    expect(['Oleg', 'Alex', 'Sha'].reverse()).toEqual(['Sha', 'Alex', 'Oleg']);
    expect(['Oleg', 'Alex', 'Sha'].shift()).toEqual('Oleg');
    expect(['Oleg', 'Alex', 'Sha', 'Max', 'Den'].slice(1, 4)).toEqual(['Alex', 'Sha', 'Max']);
    expect([33, 65, 12, 87, 45].some((el => el >=60))).toEqual(true);
    expect([33, 65, 12, 87, 45].sort()).toEqual([12, 33, 45, 65, 87]);
    expect(['Oleg', 'Alex', 'Sha'].splice(2, 1)).toEqual(['Sha']);
    expect([33, 65, 12, 87, 45].toLocaleString()).toEqual('33,65,12,87,45'  );
    expect(['Oleg', 'Alex', 'Sha'].toString()).toEqual('Oleg,Alex,Sha');
    expect(['Oleg', 'Alex', 'Sha'].unshift('Max')).toEqual(4)
});

test('test_compare_operators', () => {
    expect(5 + 1).toEqual(6);
    expect(6 - 2).toEqual(4);
    expect(4 * 3).toEqual(12);
    expect(6 / 3).toEqual(2);
    expect(5 < 10).toEqual(true);
    expect(156 > 60).toEqual(true);
    expect(27 != 5).toEqual(true);
    expect(6 == 6).toEqual(true);
    expect(4/2 == 4.0/2.0).toEqual(true);
    expect(5 === '5').toEqual(false);
    expect(5 !== 5).toEqual(false);
    expect(6 >= 4).toEqual(true);
    expect(8 <= 15).toEqual(true);
    expect(+true).toEqual(1);
    expect(5**5).toEqual(3125);
    expect(12<<2).toEqual(48);
    expect(12>>1).toEqual(6);
    expect(false && true).toEqual(false);
    expect(true || false).toEqual(true);
    expect(typeof 6).toEqual("number");
    expect(typeof 'abc').toEqual('string');
});

test('test_equality_comparison_algorithm', () => {
    expect(2 + '').toEqual('2');
    expect(2 + '3').toEqual('23');
    expect(Boolean('')).toEqual(false);
    expect(Boolean(Array)).toEqual(true);
    expect(+'123').toEqual(123);
    expect(453 != '567').toEqual(true);
    expect(7 > '3').toEqual(true);
    expect(Number ('12')).toEqual(12);
    expect(true +  false).toEqual(1);
    expect(18 / '3').toEqual(6);
    expect('oleg' + 20 + 3).toEqual('oleg203');
    expect(12 + 5 + 'Oleg').toEqual('17Oleg');
    expect([5] > null).toEqual(true);
    expect('Oleg' + +'Sha').toEqual('OlegNaN');
    expect('Oleg' == 'true').toEqual(false);
    expect(null == null).toEqual(true);
    expect(null == 'Oleg').toEqual(false);
    expect(!!'Oleg' == !!'Sha').toEqual(true);
    expect(['Oleg'] == 'Oleg').toEqual(true);
    expect([] + null + 5).toEqual('null5');
    expect(['Oleg', 'Sha', 'Alex'] == ['Oleg', 'Sha', 'Alex'] ).toEqual(false);
});

