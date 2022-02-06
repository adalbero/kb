# Angular

## Pattern - Unsubscribe on destroy

Pattern to automatically unsubscribe to an Observable when the componet is destroyed.

```typescript
export class MyComponent implements OnInit, OnDestroy {
  protected onDestroy$ = new Subject<void>();

  constructor(private service: MyService) {}

  ngOnInit() {
    this.service
      .requestData()
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((param) => console.log);
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
```
