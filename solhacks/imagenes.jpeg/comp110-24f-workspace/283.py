import numpy as np


def incr_count(n, printflag=False):
    printflag and print(
        f"Choose {n} from  [0..{2*n-1}] without repetition.  List as increasing {n}- tuple."
    )
    A = np.arange(n)
    count = 0
    i = 0
    while A[n - 1] < 2 * n:
        printflag and print(A)
        count += 1
        A[0] += 1
        i = 0
        while i < n - 1 and A[i] >= A[i + 1]:
            A[i] = i
            i = i + 1
            A[i] += 1
    return count


result = incr_count(5, printflag=True)
print("Total Count:", result)
