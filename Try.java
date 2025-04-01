public class Try{
    public static void main(String args[]){
        // int x =0 ;
        // int y=0;
        // for(int z=0 ; z<5; z++){
        //     if((++x>2)||(++y>2)){
        //         x++;
        //     }
        // }
        // System.out.println(x+" "+y);
        // System.out.println(20+1.34f+"A"+"B");
        // int a=20,b=10,c=5;
        // if((a>>1==b)&&(b<<1==a))
        //     System.out.println("Possible");
        // else
        // System.out.println("Not Possible");
        // int i=0,j=9;
        // do { 
        //     i++;
        //     if(j--<i++){
        //         break;
        //     }
        // } while (i<5);
        // System.out.println(i+""+j);

        // int arr[]={10,20,30,40,50};
        // for(int l=0;l<arr.length;l++){
        //     System.out.println(""+ arr[l]);
        // }
        // int arr[] = new int[]{2,9,8,4,6,1,7,5,3,0};
        // for(int i=0;i<arr.length;i++){
        //     arr[i/2]=arr[arr[arr[i/3]/3]/3];
        // }
        // for(int i=0;i<arr.length;i++){
        //    System.out.print(arr[i]+" ");
        // }
        int arr[][]=new int[3][];
        arr[0]=new int[1];
        arr[1]=new int[2];
        arr[2]=new int[3];
        int sum=0;
        for (int i = 0; i < 3; ++i) 
           for (int j = 0; j < i+1; ++j) 
                arr[i][j]=j+1;


        for (int i = 0; i < 3; ++i) 
           for (int j = 0; j < i+1; ++j) 
                sum+=arr[i][j];
        
            System.out.println(sum);
    }
}