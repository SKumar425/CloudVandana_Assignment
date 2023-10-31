import java.util.Random;

public class FirstQuestion {

    public static void shuffleArray(int[] arr) {

        Random randomObject = new Random();

        for (int i = 0; i < arr.length; i++) {

            int randomValue = randomObject.nextInt(arr.length);

            int currentValue = arr[i];
            arr[i] = arr[randomValue];
            arr[randomValue] = currentValue;
        }

        System.out.println("Suffeled array is :");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }

        System.out.println();
    }

    public static void main(String[] args) {
        int[] arr = { 1, 2, 3, 4, 5, 6, 7 };

        shuffleArray(arr);

    }
}