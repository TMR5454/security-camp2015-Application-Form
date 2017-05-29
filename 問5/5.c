/******************************************************
=======================================================
Project Name    : question for Security Camp
File Name       : 5.c
Encoding        : UTF8
Creation Date   : 2015/06/01

Copyright c 2015 TAMURA Dai. All rights reserved.

This source code or any portion thereof must not be
reproduced or used in any manner whatsoever.
=======================================================
*******************************************************/


#include<stdio.h>

void function(int *array, int n){
  int i;
  for(i=0;i<n;i++)array[i]=i*n;
}

/*九九の表を作成し出力*/
int main(void){

  int i,j,n=9+1;       /*nは九九の段プラス1の数*/
   int array[n][n];    /*九九の表を格納する配列*/
  
  /*function関数により表の半分を作成*/
  for(i=0;i<n;i++){
    function(&array[i][0],i);
    array[i][i]=i*i;
  }

  /*表の残り半分を埋め出力 
    0の段は非表示           */
  for(i=1;i<n;i++){
    for(j=1;j<n;j++){
      array[i][j]=array[j][i];
      printf("%2d ",array[i][j]);
    }
    printf("\n");
  }
  
  return 0;
}
