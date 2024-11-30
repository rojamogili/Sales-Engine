

RXJS Operators:

    map() operator: Allows you to transform the data emitted by an Observable into a new format

        import { from } from 'rxjs';
        import { map } from 'rxjs/operators';

        const source = from([1, 2, 3, 4, 5]);

        source.pipe(
        map(value => value * 2)
        ).subscribe(result => console.log(result));


    filter() operator: Allows you to selectively filter the values emitted by an Observable based on a given condition

        import { from } from 'rxjs';
        import { filter } from 'rxjs/operators';

        const source = from([1, 2, 3, 4, 5]);

        source.pipe(
        filter(value => value % 2 === 0)
        ).subscribe(result => console.log(result));


    debounceTime() operator: Operator is used to control the frequency of emitted values from an Observable. It waits for a specified duration of inactivity before emitting the most recent value

        import { fromEvent } from 'rxjs';
        import { debounceTime } from 'rxjs/operators';

        const searchInput = document.getElementById('search-input');

        fromEvent(searchInput, 'input').pipe(
        debounceTime(300)
        ).subscribe(event => {
        // Perform search operation here
        });


    switchMap() operator: Operator is often used for handling asynchronous operations, such as making HTTP requests in Angular. It transforms the values emitted by an Observable into a new Observable and automatically unsubscribes from the previous inner Observable when a new value arrives.

        import { fromEvent } from 'rxjs';
        import { switchMap } from 'rxjs/operators';

        const button = document.getElementById('button');

        fromEvent(button, 'click').pipe(
        switchMap(() => fetchData())
        ).subscribe(data => {
        // Handle fetched data here
        });

        function fetchData() {
        // Perform HTTP request and return an Observable
        }


    merge() operator: Operator combines multiple Observables into a single Observable that emits values from all the merged Observables concurrently

        import { merge, interval } from 'rxjs';

        const source1 = interval(1000);
        const source2 = interval(500);

        merge(source1, source2).subscribe(result => console.log(result));

        // Output: 0, 0, 1, 1, 2, 0, 3, 2, 4, 1, 5, 3, ...

    
    concatMap() operator: Operator is used to transform the values emitted by an Observable into Observables, and then flattens and concatenates them in a sequential manner. It maintains the order of emissions and waits for each inner Observable to complete before subscribing to the next one.

        import { of, interval } from 'rxjs';
        import { concatMap, take } from 'rxjs/operators';

        const source = of(1, 2, 3);

        source.pipe(
        concatMap(value =>
            interval(1000).pipe(
                take(3),
            map(innerValue => value + innerValue)
            )
        )
        ).subscribe(result => console.log(result));

        // Output:
        // 1, 2, 3, 2, 3, 4, 3, 4, 5


    catchError() operator: Allows you to gracefully handle errors emitted by an Observable

        import { of } from 'rxjs';
        import { catchError } from 'rxjs/operators';

        const source = of(1, 2, 3, 'oops', 5);

        source.pipe(
        map(value => value * 2),
            catchError(error => {
                console.log('Error:', error);
                return of(0); // Fallback value
            })
        ).subscribe(result => console.log(result));


    tap() operator: Allows you to perform side effects or actions on the emitted values of an Observable without modifying the values themselves. It is often used for debugging, logging, or triggering actions that do not affect the stream

        import { from } from 'rxjs';
        import { tap } from 'rxjs/operators';

        const source = from([1, 2, 3, 4, 5]);

        source.pipe(
        tap(value => console.log('Value:', value)),
            map(value => value * 2)
        ).subscribe(result => console.log(result));


    of() operator: Operator is used to create an Observable that emits a sequence of values. It takes any number of arguments and emits each argument as a separate value in the sequence. It is commonly used to create Observables from static values or to combine multiple values into a single Observable

        import { of } from 'rxjs';

        of(1, 2, 3, 4, 5).subscribe(result => console.log(result));


    forkJoin() operator: Operator combines multiple Observables into a single Observable that emits an array of values from each source Observable, only when all the source Observables have completed. It waits for all the Observables to emit their final value and then emits an array of those values.

        import { forkJoin, of } from 'rxjs';

        const source1 = of('Hello');
        const source2 = of('World');

        forkJoin([source1, source2]).subscribe(results => {
            console.log(results[0] + ' ' + results[1]);
        });


    finalize() operator: Allows you to perform a specified action when an Observable completes or errors, regardless of whether it emits values or not. It is often used to release resources or perform cleanup operations

        import { of } from 'rxjs';
        import { finalize } from 'rxjs/operators';

        const source = of(1, 2, 3);

        source.pipe(
            finalize(() => {
                // Cleanup or final action
                console.log('Observable completed.');
            })
        ).subscribe(result => console.log(result));


    pluck() operator: Allows you to extract a specific property from the emitted objects in an Observable sequence. It takes the property name as a parameter and emits only the values of that property.

        import { from } from 'rxjs';
        import { pluck } from 'rxjs/operators';

        const source = from([
        { name: 'John', age: 30 },
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 35 }
        ]);

        source.pipe(
            pluck('name')
        ).subscribe(result => console.log(result));

        // Output: John, Alice, Bob


    startWith() operator: Allows you to prepend a default or initial value to an Observable sequence. The prepended value will be emitted as the first value in the stream.

        import { of } from 'rxjs';
        import { startWith } from 'rxjs/operators';

        const source = of(1, 2, 3);

        source.pipe(
            startWith(0)
        ).subscribe(result => console.log(result));

        // Output: 0, 1, 2, 3


    retry() operator: Allows you to retry the emission of values from an Observable when it encounters an error. It takes the number of retry attempts as a parameter and resubscribes to the source Observable. 

        import { throwError, interval } from 'rxjs';
        import { retry } from 'rxjs/operators';

        const source = interval(1000);

        source.pipe(
            retry(3)
        ).subscribe(
            result => console.log(result),
            error => console.error('Error:', error)
        );

        Note: interval: Creates an Observable that emits sequential numbers every specified interval of time (It also has another param which is defining time to return the response (number)) 


    take() operator: Allows you to take a specified number of values emitted by an Observable and then complete. It limits the stream to emit only the desired number of values

        import { interval } from 'rxjs';
        import { take } from 'rxjs/operators';

        const source = interval(1000);

        source.pipe(
            take(5)
        ).subscribe(result => console.log(result));

        // Output: 0, 1, 2, 3, 4


    distinctUntilChanged() operator: Operator filters out consecutive duplicate values emitted by an Observable. It ensures that only unique values are propagated downstream.

        import { from } from 'rxjs';
        import { distinctUntilChanged } from 'rxjs/operators';

        const source = from([1, 1, 2, 2, 3, 3, 3, 4, 5]);

        source.pipe(
            distinctUntilChanged()
        ).subscribe(result => console.log(result));

        // Output: 1, 2, 3, 4, 5

    
    scan() operator: Operator applies an accumulator function over the values emitted by an Observable and emits the accumulated result after each emission. It is similar to the Array.reduce() method.

        import { from } from 'rxjs';
        import { scan } from 'rxjs/operators';

        const source = from([1, 2, 3, 4, 5]);

        source.pipe(
            scan((acc, value) => acc + value, 0)
        ).subscribe(result => console.log(result));

        // Output: 1, 3, 6, 10, 15

    
    takeUntil() operator: Allows you to complete an Observable when another Observable emits a value. It takes a second Observable as a parameter and completes the source Observable as soon  as the second Observable emits a value.

        import { interval, timer } from 'rxjs';
        import { takeUntil } from 'rxjs/operators';

        const source = interval(1000);
        const stopper = timer(5000);

        source.pipe(
            takeUntil(stopper)
        ).subscribe(result => console.log(result));