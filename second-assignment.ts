

export function counter(initialValue = 0) {
    let currentValue = initialValue;
    const getValue = () => {
        return currentValue;
    };
    const nextValue = () => {
        currentValue++;
    }
    return [getValue, nextValue];
}

const [getA, nextA] = counter(1);

getA();
nextA();
getA();

const [getB, nextB] = counter(10);
nextB();
getA();
getB();

nextA()
getA();
getB();