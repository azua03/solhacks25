"""__author__ :000000000"""

"""Tea Party exercise"""

__author__ = "11111111"


def main_planner(guests: int) -> None:
    """Shows the total"""

    print("A Cozy Tea Party for " + str(guests) + " People!")
    # Calculates the number of tea bags
    print("Tea Bags: " + str(tea_bags(guests)))
    # Calculates the number of treats
    print("Treats: " + str(treats(guests)))
    # Calculates the total cost
    print("Cost: $" + str(cost(tea_bags(guests), treats(guests))))


def tea_bags(people: int) -> int:
    """For each person they require 2 tea bags"""
    return people * 2


def treats(people: int) -> int:
    """Each guest will have 1.5 treats for each tea they drink"""
    # Forgot to define people and just multiplied tea bags and refer back to tea_bags
    return int(tea_bags(people=people) * 1.5)


def cost(tea_count: int, treat_count: int) -> float:
    """Calculates the total cost of tea bags and treats"""
    # multiplied tea count by given value for each variable
    return (tea_count * 0.50) + (treat_count * 0.75)


if __name__ == "__main__":
    main_planner(guests=int(input("How many guests are attending your tea party? ")))
