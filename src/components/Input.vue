<template>
    <input
      :type="props.type" 
      :class="setSizeStyles(props.size)"
      :placeholder="props.placeholder ? props.placeholder : ''"
      class="bg-white border border-gray-5 placeholder:text-gray-4
      hover:bg-gray-2 rounded-[10px] px-[18px] py-[12px]"
       />
    <label v-if="props.label">{{ props.label }}</label>
</template>
  
  <script setup lang="ts">

  declare type Type = "text" | "password";
  
  declare type Label = string | null;

  declare type Placeholder = string | null;

  declare type SizeType = "xs" | "sm" | "md" | "lg" | "xl";

  /**
   * 
   * @param size 
   */
  function setSizeStyles(size: SizeType): string {
    switch (size) {
      case "xs":
        return "w-[150px] h-[42px]";
      
      case "sm":
        return "w-[200px] h-[42px]";

      case "md":
        return "w-[250px] h-[44px]";
    
      case "lg":
        return "w-[300px] h-[44px]";

      case "xl":
        return "w-[350px] h-[44px]";

      default:
        return "w-[250px] h-[44px]";
    }
  }

  declare interface Props {
    type?: Type,
    label?: Label,
    placeholder?: Placeholder,
    size?: SizeType,
  }

  const props = withDefaults(defineProps<Props>(), {
    type: 'text',
    label: null,
    placeholder: null,
    size: "md",
  })


  </script>
