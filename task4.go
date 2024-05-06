package main

import "fmt"

func main() {
	showMultiplicationTable(5)
}

func showMultiplicationTable(num int) {
	fmt.Printf(" \t")

	for i := 1; i <= num; i++ {
		fmt.Printf("%d\t", i)
	}
	fmt.Println()

	for i := 1; i <= num; i++ {
		for j := 1; j <= num; j++ {
			if j == 1 {
				fmt.Printf("%d\t", i)
			}
			fmt.Printf("%d\t", i*j)
		}
		fmt.Println()
	}
}
